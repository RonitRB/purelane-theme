# Data Model: Purelane Theme

This document defines the custom data structures required by the Purelane theme sections. Store owners must configure these Metafields and Metaobjects in the Shopify Admin to populate the theme's dynamic components.

## Product Metafields

| Namespace & Key | Type | Description | Used In Section |
| :--- | :--- | :--- | :--- |
| `custom.combo_components` | List of Products | The individual products that make up a combo box. Used to render the visual stack of components. | Combos |
| `custom.combo_component_labels` | List of Single-line text | Short labels paired by index to the `combo_components` list (e.g. "x2", "+1"). | Combos |
| `custom.badge_label` | Single-line text | Small text badge shown in the top right corner of a product card or combo card (e.g. "Bestseller"). | Product Grid, Combos |
| `custom.is_featured_combo` | Boolean | If true, applies hero styling (gold border, shadow, primary button) to this combo card. | Combos |

## Collection Metafields

| Namespace & Key | Type | Description | Used In Section |
| :--- | :--- | :--- | :--- |
| (None currently required) | | | |

## Metaobjects

| Name | Type | Fields | Description | Used In Section |
| :--- | :--- | :--- | :--- | :--- |
| (None currently required) | | | |

*Note: As additional features are implemented, any new custom data requirements must be documented here.*
