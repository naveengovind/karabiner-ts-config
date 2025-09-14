import {
  map,
  rule,
  Rule,
  RuleBuilder,
  withModifier,
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

  rule('left_control')
    .condition(disableOnBuiltInKeyboard)
    .manipulators([
      // Mouse movement with ASDF
      withModifier('left_control')([
        map('d').toMouseKey({ y: -1536 }),
        map('s').toMouseKey({ y: 1536 }),
        map('a').toMouseKey({ x: -1536 }),
        map('f').toMouseKey({ x: 1536 }),

        map('p').toMouseKey({ speed_multiplier: 8.0 }),
        map('o').toMouseKey({ speed_multiplier: 12.0 }),
        map('i').toMouseKey({ speed_multiplier: 0.15 }),
        map('u').toMouseKey({ speed_multiplier: 0.1 }),

        // Mouse clicks
        map('spacebar').toPointingButton('button1'),
        map('b').toPointingButton('button2'),

        // HJKL to Arrow Keys
        map('h').to('left_arrow'),
        map('j').to('down_arrow'),
        map('k').to('up_arrow'),
        map('l').to('right_arrow'),

        // QWER for scrolling and CV for line navigation
        map('q').toMouseKey({ horizontal_wheel: 32, speed_multiplier: 1.2 }),
        map('w').toMouseKey({ vertical_wheel: 32, speed_multiplier: 1.2 }),
        map('e').toMouseKey({ vertical_wheel: -32, speed_multiplier: 1.2 }),
        map('r').toMouseKey({ horizontal_wheel: -32, speed_multiplier: 1.2 }),

        // C and V to go to the beginning and end of the line
        map('c').to('left_arrow', 'left_command'),
        map('v').to('right_arrow', 'left_command'),
      ])
    ]),
]

export default config