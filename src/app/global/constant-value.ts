/** 入力フォームの値 */
const enableInputFormValue = [
  'firstName',
  'lastName',
  'fullName',
  'uuid',
  'date',
  'time',
  'datetime',
  'address',
  'fix',
  'randomSelect',
  'randomCharacter',
  'empty',
  'nonSelect',
] as const;

/** 入力フォームの種類型 */
export type EnableInputFormType = typeof enableInputFormValue[number];

/**　入力フォーム対応付 */
export const enableInputFormNameMap: {
  label: string;
  value: EnableInputFormType;
}[] = [
  { label: '名前', value: 'firstName' },
  { label: '苗字', value: 'lastName' },
  { label: 'フルネーム', value: 'fullName' },
  { label: 'UUID', value: 'uuid' },
  { label: '日付', value: 'date' },
  { label: '時間', value: 'time' },
  { label: '日時', value: 'datetime' },
  { label: '住所', value: 'address' },
  { label: '固定値', value: 'fix' },
  { label: '無作為選択', value: 'randomSelect' },
  { label: '文字列', value: 'randomCharacter' },
  { label: '空文字', value: 'empty' },
  { label: '未選択', value: 'nonSelect' },
];

/** 選択肢の最大個数 */
export const maxChoiceValueCount = 10;
