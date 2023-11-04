from inspect import stack
from opcode import stack_effect
import reflex as rx


class State(rx.State):
    """The app state."""

    pass

class Header:
    def __init__(self) -> None:
        self.header: rx.Hstack = rx.hstack()
        self.email: rx.Hstack = rx.hstack(
            rx.box(
                rx.icon(
                    tag="email",
                    _dark={"color": "rgba(255,255,255,0.5)"})),
                )

    def compile_component(self) -> list[stack]:
        return [self.email]
    
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
