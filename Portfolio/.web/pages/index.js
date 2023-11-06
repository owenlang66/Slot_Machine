import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Heading, HStack, Image, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import { EmailIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Stack sx={{"@keyframes dots": {"0%": {"backgroundPosition": "0 0"}, "100%": {"backgroundPosition": "40px 40px"}}, "animation": "dots 4s linear infinite alternate-reverse both", "_light": {"background": "radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)", "backgroundSize": "25px 25px"}, "background": "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)", "backgroundSize": "25px 25px"}}>
  <HStack>
  <HStack alignItems={`center`} justifyContent={`center`}>
  <Box>
  <EmailIcon sx={{"_dark": {"color": "rgba(255,255,255,0.5)"}}}/>
</Box>
  <Box>
  <Text sx={{"_dark": {"color": "rgba(255,255,255,0.5)"}}}>
  {`owenlang66@gmail.com`}
</Text>
</Box>
</HStack>
  <Spacer/>
  <Button colorScheme={`none`} onClick={toggleColorMode} sx={{"_light": {"color": "black"}, "_dark": {"color": "white"}}}>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
</Button>
</HStack>
  <Box sx={{"width": "100%", "height": "40vh"}}>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <VStack sx={{"width": "100%", "height": "84vh", "padding": "15rem 0rem", "alignItems": "center", "justifyContent": "start"}}>
  <VStack alignItems={`center`} justifyContent={`center`} spacing={`1rem`}>
  <Heading sx={{"fontSize": ["2rem", "2.85rem", "4rem", "5rem", "5rem"], "fontWeight": "900", "_dark": {"background": "linear-gradient(to right, #e1e1e1, #757575)", "backgroundClip": "text"}}}>
  {`Hi there! I'm Owen the former farmer`}
</Heading>
  <Heading size={`2xl`} sx={{"@keyframes wave": {"0%": {"transform": "rotate(15deg)"}, "100%": {"transform": "rotate(-15deg)"}}, "animation": "wave 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate-reverse both"}}>
  {`🍃`}
</Heading>
</VStack>
  <HStack spacing={`1rem`}>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Software Engineer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Designer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Full Stack Developer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Former Farmer`}
</Badge>
</HStack>
  <Breadcrumb>
  <BreadcrumbItem>
  <HStack>
  <Image htmlHeight={`24px`} htmlWidth={`24pxx`} src={`/github.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <BreadcrumbLink as={NextLink} href={`https://github.com/owenlang66`} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`GitHub`}
</BreadcrumbLink>
</HStack>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <Image htmlHeight={`24px`} htmlWidth={`24pxx`} src={`/linkedin.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <BreadcrumbLink as={NextLink} href={`https://www.linkedin.com/in/owen-lang/`} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`LinkedIn`}
</BreadcrumbLink>
</HStack>
</BreadcrumbItem>
</Breadcrumb>
</VStack>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <VStack sx={{"width": "100%", "height": "84vh", "padding": "15rem 0rem", "alignItems": "center", "justifyContent": "start"}}>
  <VStack alignItems={`center`} justifyContent={`center`} spacing={`1rem`}>
  <Heading sx={{"fontSize": ["2rem", "2.85rem", "4rem", "5rem", "5rem"], "fontWeight": "900", "_dark": {"background": "linear-gradient(to right, #e1e1e1, #757575)", "backgroundClip": "text"}}}>
  {`Hi there! I'm Owen the former farmer`}
</Heading>
  <Heading size={`2xl`} sx={{"@keyframes wave": {"0%": {"transform": "rotate(15deg)"}, "100%": {"transform": "rotate(-15deg)"}}, "animation": "wave 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate-reverse both"}}>
  {`🍃`}
</Heading>
</VStack>
  <VStack spacing={`3rem`}>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Software Engineer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Designer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Full Stack Developer`}
</Badge>
  <Badge sx={{"padding": ["0.15rem 0.35rem", "0.15rem 0.35rem", "0.15rem 1rem", "0.15rem 1rem", "0.15rem 1rem"]}} variant={`solid`}>
  {`Former Farmer`}
</Badge>
</VStack>
  <Breadcrumb>
  <BreadcrumbItem>
  <HStack>
  <Image htmlHeight={`24px`} htmlWidth={`24pxx`} src={`/github.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <BreadcrumbLink as={NextLink} href={`https://github.com/owenlang66`} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`GitHub`}
</BreadcrumbLink>
</HStack>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <Image htmlHeight={`24px`} htmlWidth={`24pxx`} src={`/linkedin.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <BreadcrumbLink as={NextLink} href={`https://www.linkedin.com/in/owen-lang/`} sx={{"_dark": {"color": "rgba(255,255,255,0.7)"}}}>
  {`LinkedIn`}
</BreadcrumbLink>
</HStack>
</BreadcrumbItem>
</Breadcrumb>
</VStack>
</Box>
</Box>
  <Box sx={{"width": "100%", "height": "40vh"}}/>
  <VStack>
  <Heading sx={{"fontSize": ["1.3rem", "1.85rem", "2.6rem", "3.25rem", "3.25rem"], "fontWeight": "900", "_dark": {"background": "linear-gradient(to right, #e1e1e1, #757575)", "backgroundClip": "text"}, "backgroundImage": "url('landscape.jpg')", "backgroundSize": "cover"}}>
  {`Hello there! I'm Owen. My passions lie in in the agricultural world and sustainable living. Growing up in Nebraskan farm country, I understand the need for changing our agricultural practices and lifestlyes in order to better our planet. I recently changed to software engineering in order to maximize my skills and problem solving abilities for the better! `}
</Heading>
</VStack>
  <Box sx={{"width": "100%", "height": "40vh"}}/>
  <VStack>
  <Heading sx={{"fontSize": ["1.3rem", "1.85rem", "2.6rem", "3.25rem", "3.25rem"], "fontWeight": "900", "_dark": {"background": "linear-gradient(to right, #e1e1e1, #757575)", "backgroundClip": "text"}}}>
  {`Hello there! I'm Owen. My passions lie in in the agricultural world and sustainable living. Growing up in Nebraskan farm country, I understand the need for changing our agricultural practices and lifestlyes in order to better our planet. I recently changed to software engineering in order to maximize my skills and problem solving abilities for the better! `}
</Heading>
</VStack>
</Stack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
