import React from "react";
const appellations = [
  { value: "", content: "請選擇稱謂" },
  { value: "mr", content: "先生" },
  { value: "ms", content: "女士" },
  { value: "mx", content: "不明" },
];

const countys = [
  { value: "", content: "請選擇縣市" },
  { value: "KLU", content: "基隆市" },
  { value: "TPH", content: "新北市" },
  { value: "TPE", content: "臺北市" },
  { value: "TYC", content: "桃園市" },
  { value: "HSH", content: "新竹縣" },
  { value: "HSC", content: "新竹市" },
  { value: "MAC", content: "苗栗市" },
  { value: "MAL", content: "苗栗縣" },
  { value: "TXG", content: "臺中市" },
  { value: "CWH", content: "彰化縣" },
  { value: "CWS", content: "彰化市" },
  { value: "NTC", content: "南投市" },
  { value: "NTO", content: "南投縣" },
  { value: "YLH", content: "雲林縣" },
  { value: "CHY", content: "嘉義縣" },
  { value: "CYI", content: "嘉義市" },
  { value: "TNN", content: "臺南市" },
  { value: "KHH", content: "高雄市" },
  { value: "IUH", content: "屏東縣" },
  { value: "PTS", content: "屏東市" },
  { value: "ILN", content: "宜蘭縣" },
  { value: "ILC", content: "宜蘭市" },
  { value: "HWA", content: "花蓮縣" },
  { value: "HWC", content: "花蓮市" },
  { value: "TTC", content: "臺東市" },
  { value: "TTT", content: "臺東縣" },
  { value: "PEH", content: "澎湖縣" },
  { value: "KMN", content: "金門縣" },
  { value: "LNN", content: "連江縣" },
];

function Input({ lg, sm, label, title, type, placeholder }) {
  return (
    <div className={`input-group input-w-lg-${lg} input-w-sm-s${sm}`}>
      <label htmlFor={label}>{title}</label>
      <input type={type} placeholder={placeholder} id={label} />{" "}
      {/* !!! 要轉成 display block */}
    </div>
  );
}

function Select({ options, label, title }) {
  const optionsHTML = options.map((option) => {
    return <option value={option.value}>{option.content}</option>;
  });

  return (
    <>
      <label htmlFor={label}>{title}</label>
      <div className="select-container">
        <select id={label} required>
          {optionsHTML}
        </select>
      </div>
    </>
  );
}

export default function Step1() {
  return (
    <form className="col col-12" data-phase="address">
      <h3 className="form-title">寄送地址</h3>

      <section className="form-body col col-12">
        {/* 第一行 */}
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <Select
              options={appellations}
              label="select-appellation"
              title="稱謂"
            />
          </div>

          <div className="input-group input-w-lg-4 input-w-sm-s2">
            <Input
              label="input-name"
              title="姓名"
              type="text"
              placeholder="請輸入姓名"
            />
          </div>
        </div>
        {/* 第一行end */}

        {/* 第二行 */}
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <Input
              label="input-telephone"
              title="電話"
              type="tel"
              placeholder="請輸入行動電話"
            />
          </div>

          <div className="input-group input-w-lg-3 input-w-sm-full">
            <Input
              label="input-email"
              title="Email"
              type="email"
              placeholder="請輸入電子郵件"
            />
          </div>
        </div>
        {/* 第二行end */}

        {/* 第三行 */}
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <Select options={countys} label="select-county" title="縣市" />
          </div>

          <div className="input-group input-w-lg-4 input-w-sm-full">
            <Input
              lg="4"
              sm="full"
              label="input-address"
              title="地址"
              type="text"
              placeholder="請輸入地址"
            />
          </div>
        </div>
        {/* 第三行end */}
      </section>
    </form>
  );
}
