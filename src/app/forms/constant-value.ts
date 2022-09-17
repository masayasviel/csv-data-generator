/** 入力フォームの値 */
const enableInputFormValue = [
  'firstName',
  'lastName',
  'fullName',
  'uuid',
  'date',
  'time',
  'datetime',
  'fix',
  'randomSelect',
  'randomCharacter',
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
  { label: '固定値', value: 'fix' }, // 1つ
  { label: '無作為選択', value: 'randomSelect' }, // 複数入力
  { label: '文字列', value: 'randomCharacter' }, // 文字数範囲選択、大文字小文字数字
  { label: '未選択', value: 'nonSelect' },
];
