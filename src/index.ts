import {
  writeToProfile,
} from "karabiner.ts"
import defaultConfig from "./profiles/default"
import eLiangScuffConfig from "./profiles/e-liang-scuff"

writeToProfile("Default", defaultConfig)
writeToProfile("E-Liang-Scuff", eLiangScuffConfig)