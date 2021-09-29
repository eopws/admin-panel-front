export default interface IBan {
    lockStatus: '1' | '0',
    tmp_to: string,
    tmp_from: string,
    reason: string
}
