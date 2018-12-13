import { Platform } from "react-native"

/**
 * Just the font names.
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  oprimary: Platform.select({ ios: "Montserrat", android: "Montserrat" }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  osecondary: Platform.select({ ios: "Montserrat", android: "Montserrat" }),
}
