import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Heading, HStack, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import { EmailIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
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
  <VStack sx={{"_light": {"background": "radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)", "backgroundSize": "25px 25px"}, "background": "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)", "backgroundSize": "25px 25px"}}>
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
  <Box sx={{"width": "100%"}}>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <VStack sx={{"width": "100%", "height": "84vh", "padding": "15rem 0rem", "alignItems": "center", "justifyContent": "start"}}>
  <HStack>
  <Heading sx={{"fontSize": ["2rem", "2.85rem", "4rem", "5rem", "5rem"], "fontWeight": "900", "_dark": {"background": "linear-gradient(to right, #e1e1e1, #757575)", "backgroundClip": "text"}}}>
  {`Hi there! I'm Owen the former farmer`}
</Heading>
</HStack>
</VStack>
</Box>
</Box>
</VStack>
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
