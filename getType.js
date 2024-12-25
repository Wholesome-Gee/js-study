// export default 를 활용하여 메소드 내보내기기
export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}