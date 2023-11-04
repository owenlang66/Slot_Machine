from inspect import stack
from msilib.schema import Component
from opcode import stack_effect
import reflex as rx


class State(rx.State):
    """The app state."""

    pass

dots: dict = {
    "@keyframes dots": {
        "0%": {
            "background_position": "0 0"
        },
        "100%": {
            "background_position": "40pxx 40px"},
    },
    "animation": "dots 4s linear infinite alternate-reverse both"
}



css: dict = {
    "app": {
        "_dark": {
            "bg": "#15171b"
        }
        },
    "header": {
        "width": "100%",
        "height": "50px",
        "padding": [
            "0rem 1rem",
            "0rem 1rem",
            "0rem 1rem",
            "0rem 8rem",
            "0rem 8rem"
            ],
            "transition": "all 550ms ease",
    },
    "main":{
        "property": {
            "width": "100%",
            "height": "84vh",
            "padding": "15rem 0rem",
            "align_items": "center",
            "justify_content": "start"
        }
    }
}

class Header:
    def __init__(self) -> None:
        self.header: rx.Hstack = rx.hstack()
        self.email: rx.Hstack = rx.hstack(
            rx.box(
                rx.icon(
                    tag="email",
                    _dark={"color": "rgba(255,255,255,0.5)"})),
                    rx.box(
                        rx.text("owenlang66@gmail.com", _dark={"color": "rgba(255,255,255,0.5)"})
                ),
            align_items="center",
            justify_content="center",
        )
        self.theme: rx.Component = rx.color_mode_button(
            rx.color_mode_icon(),
            color_scheme="none",
            _light={"color": "black"},
            _dark={"color": "white"},
        )

    def compile_component(self) -> list[stack]:
        return [self.email, rx.spacer(), self.theme]
    
    def build(self) -> stack_effect:
        self.header.children = self.compile_component()
        return self.header
    

class Main:
    def __init__(self):
        self.box: rx.Box = rx.box(width="100%")

        self.name: rx.Hstack = rx.hstack(
            rx.heading(
                "Hi there! I'm Owen the former farmer",
                font_size=["2rem", "2.85rem", "4rem", "5rem", "5rem"],
                font_weight="900", 
                _dark={
                    "background": "linear-gradient(to right, #e1e1e1, #757575)",
                    "background_clip": "text",
                },
            ),
        )

    def compile_desktop_component(self) -> Component:
        return rx.tablet_and_desktop(
            rx.vstack(
                self.name,
                style=css.get("main").get("property"),
            )
        )
    
    def build(self):
        self.box.children = [self.compile_desktop_component()]
        return self.box


@rx.page(route="/")
def landing() -> rx.Component:
    header: object = Header().build()
    main: object = Main().build()

    return rx.vstack(
        header,
        main,

        # background 
        _light={
            "background": "radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)",
            "background_size": "25px 25px", 
        },
        background="radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
        background_size="25px 25px", 
    )


# Add state and page to the app.
app = rx.App(style=css.get("app"))
app.compile()
