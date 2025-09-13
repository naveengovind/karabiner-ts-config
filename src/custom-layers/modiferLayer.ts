import {
    rule,
    type Condition,
    type BasicManipulatorBuilder,
    type FromModifierParam,
  } from 'karabiner.ts'
  
  
export function modifierLayer(
    modifierKey: FromModifierParam,
    layerName: string,
  ) {
    return {
      condition(condition: Condition) {
        return {
          manipulators(builders: Array<BasicManipulatorBuilder>) {
            return rule(layerName)
              .condition(condition)
              .manipulators(
                builders.flatMap((builder) => {
                  // Get the built manipulators and add the modifier to each
                  const manipulators = builder.build()
                  return manipulators.map((manipulator) => {
                    if (manipulator.from && manipulator.from.modifiers) {
                      manipulator.from.modifiers.mandatory = [
                        ...(manipulator.from.modifiers.mandatory || []),
                        modifierKey as any,
                      ]
                    } else if (manipulator.from) {
                      manipulator.from.modifiers = {
                        mandatory: [modifierKey as any],
                      }
                    }
                    return { build: () => [manipulator] }
                  })
                })
              )
          },
        }
      },
    }
  }
  