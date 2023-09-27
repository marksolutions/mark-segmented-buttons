# `<mark-segmented-button>` [![Published on npm](https://img.shields.io/npm/v/@markai/mark-segmented-button.svg)](https://www.npmjs.com/package/@markai/mark-segmented-button)

- [SegmentedButton](https://m3.material.io/components/segmented-buttons/overview) is a web component implementation of the [Material Design 3](https://m3.material.io/) using [Lit](https://lit.dev/)
- Segmented buttons help people select options, switch views, or sort elements

### Behaviour

- Segmented buttons can contain icons, label text, or both
- Two types: single-select and multi-select
- Use for simple choices between two to five items (for more items or complex choices, use chips)

### Usage

TODO

### Properties

| Name      | Type                  | Description                                                                                                       |
| --------- | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `name`    | `string`              | Name of the form control. Submitted with the form as part of a name/value pair                                    |
| `buttons` | [`Button[]`](#button) | List of buttons. contains all details. Atleast 2 buttons required otherwise this component work as simple Button. |

#### Button

| key            | Type      | Description                           |
| -------------- | --------- | ------------------------------------- |
| `name`         | `string`  | Button name                           |
| `label`        | `string`  | Button label                          |
| `icon`         | `string`  | Button icon                           |
| `trailingIcon` | `boolean` | Whether icon is trailing icon or not. |
