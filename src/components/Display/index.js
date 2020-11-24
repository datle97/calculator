import "./Display.scss";

const Display = ({ display }) => {
  const addComma = (result) => {
    const str = result.split(".");
    // các số trước dấu "." tự thêm "," vào mỗi 3 số nằm ở cuối
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    return str.join(".");
  };
  return (
    <div className="display">
      <p>
        {display.match(/\d/g) && display.match(/\d/g).length > 9
          ? // nếu kết quả quá lớn(> 9 chữ số giới hạn, không tính dấu ".", ","...) => hiển thị kiểu Exponential
            Number(display).toExponential(2)
          : addComma(display)}
      </p>
    </div>
  );
};

export default Display;
