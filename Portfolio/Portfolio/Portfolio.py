from inspect import stack
from opcode import stack_effect
import reflex as rx


class State(rx.State):
    """The app state."""

    pass

css: dict = {
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
            color_scheme="None",
            _light={"color": "black"},
            _dark={"color": "white"},
        )

    def compile_component(self) -> list[stack]:
        return [self.email, rx.spacer(), self.theme]
    
    def build(self) -> stack_effect:
        self.header.children = self.compile_component()
        return self.header

@rx.page(route="/")
def landing() -> rx.Component:
    header: object = Header().build()

    return rx.vstack(
        header,
    )


# Add state and page to the app.
app = rx.App()
app.compile()
