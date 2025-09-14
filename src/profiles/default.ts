import {
  map,
  rule,
  type Rule,
  type RuleBuilder,
} from "karabiner.ts"

const config: Array<Rule | RuleBuilder> = [
  rule("Command + [ and ] to universal back and forward").manipulators([
    map("open_bracket", "left_command").toPointingButton("button4"),
    map("close_bracket", "left_command").toPointingButton("button5"),
  ]),

  rule("Caps Lock to Control/Escape").manipulators([
    map("caps_lock")
      .to("left_control")
      .toIfAlone("escape")
  ]),
]

export default config
