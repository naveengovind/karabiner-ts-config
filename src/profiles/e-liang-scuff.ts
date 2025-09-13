import {
  map,
  rule,
  Rule,
  RuleBuilder,
  hyperLayer,
  type Condition,
} from 'karabiner.ts'


const disableOnBuiltInKeyboard: Condition = {
  type: 'device_unless',
  identifiers: [
    {
      is_built_in_keyboard: true,
    }
  ],
}

const config: Array<Rule | RuleBuilder> = [
  rule('Caps Lock to Hyperkey').manipulators([
    map('caps_lock')
      .to('right_control')
      .toIfAlone('escape')
  ]),

  rule('Command + [ and ] to universal back and forward').manipulators([
    map('open_bracket', 'left_command').toPointingButton('button4'),
    map('close_bracket', 'left_command').toPointingButton('button5'),
  ]),

  rule('Swap Left Alt and Left Command keys')
    .condition(disableOnBuiltInKeyboard).manipulators([
      map('left_option').to('left_command'),
      map('left_command').to('left_option'),
    ]),

  rule('Control Layer')
    .condition(disableOnBuiltInKeyboard)
    .manipulators([
      // Mouse movement with ASDF
      map('d', 'left_control').toMouseKey({ y: -1536 }),
      map('s', 'left_control').toMouseKey({ y: 1536 }),
      map('a', 'left_control').toMouseKey({ x: -1536 }),
      map('f', 'left_control').toMouseKey({ x: 1536 }),

      // Mouse speed controls
      map('o', 'left_control').toMouseKey({ speed_multiplier: 12.0 }),
      map('p', 'left_control').toMouseKey({ speed_multiplier: 8.0 }),
      map('i', 'left_control').toMouseKey({ speed_multiplier: 0.15 }),
      map('u', 'left_control').toMouseKey({ speed_multiplier: 0.1 }),

      // Mouse clicks
      map('spacebar', 'left_control').toPointingButton('button1'),
      map('b', 'left_control').toPointingButton('button2'),

      // HJKL to Arrow Keys
      map('h', 'left_control').to('left_arrow'),
      map('j', 'left_control').to('down_arrow'),
      map('k', 'left_control').to('up_arrow'),
      map('l', 'left_control').to('right_arrow'),

      // QWER for scrolling and CV for line navigation
      map('q', 'left_control').toMouseKey({ horizontal_wheel: 32, speed_multiplier: 1.2 }),
      map('w', 'left_control').toMouseKey({ vertical_wheel: 32, speed_multiplier: 1.2 }),
      map('e', 'left_control').toMouseKey({ vertical_wheel: -32, speed_multiplier: 1.2 }),
      map('r', 'left_control').toMouseKey({ horizontal_wheel: -32, speed_multiplier: 1.2 }),

      // C and V to go to the beginning and end of the line
      map('c', 'left_control').to('left_arrow', 'left_command'),
      map('v', 'left_control').to('right_arrow', 'left_command'),
    ]),
]

export default config