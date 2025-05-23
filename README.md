![execute-test workflow](https://github.com/takeda4dcs/text-ellipsis/actions/workflows/execute-test.yaml/badge.svg)

# @takeda4dcs/text-ellipsis

[Usage](/spec/index.spec.ts)

## Table of contents

### Functions

- [textEllipsisEnd](#textellipsisend)
- [textEllipsisMiddle](#textellipsismiddle)
- [textEllipsisStart](#textellipsisstart)

## Functions

### textEllipsisEnd

▸ **textEllipsisEnd**(`origin`, `length`, `ellipsis?`): `undefined` \| `string`

Clip the string from its end

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `origin` | `string` | `undefined` | string to truncate |
| `length` | `number` | `undefined` | length to trim - does not include the length of the ellipsis |
| `ellipsis` | `string` | `DEFAULT_ELLIPSIS` | specify the ellipsis - default false '…' |

#### Returns

`undefined` \| `string`

clipped string

#### Defined in

[index.ts:62](https://github.com/takeda4dcs/text-ellipsis/blob/81ca3a4/index.ts#L62)

___

### textEllipsisMiddle

▸ **textEllipsisMiddle**(`origin`, `length`, `ellipsis?`, `rear_longer?`): `undefined` \| `string`

Clip the string from its middle

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `origin` | `string` | `undefined` | string to truncate |
| `length` | `number` | `undefined` | length to trim - does not include the length of the ellipsis |
| `ellipsis` | `string` | `DEFAULT_ELLIPSIS` | specify the ellipsis - default false '…' |
| `rear_longer` | `boolean` | `false` | rear part be made longer if length is an odd number - default false |

#### Returns

`undefined` \| `string`

clipped string

#### Defined in

[index.ts:12](https://github.com/takeda4dcs/text-ellipsis/blob/81ca3a4/index.ts#L12)

___

### textEllipsisStart

▸ **textEllipsisStart**(`origin`, `length`, `ellipsis?`): `undefined` \| `string`

Clip the string from its start

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `origin` | `string` | `undefined` | string to truncate |
| `length` | `number` | `undefined` | length to trim - does not include the length of the ellipsis |
| `ellipsis` | `string` | `DEFAULT_ELLIPSIS` | specify the ellipsis - default false '…' |

#### Returns

`undefined` \| `string`

clipped string

#### Defined in

[index.ts:40](https://github.com/takeda4dcs/text-ellipsis/blob/81ca3a4/index.ts#L40)