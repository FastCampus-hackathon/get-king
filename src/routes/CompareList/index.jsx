import React, { useState } from "react";

function CompareList() {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <header>
        <h2>공고 비교 리스트</h2>
        <input
          type="text"
          placeholder="제목을 검색할 수 있어요"
          value={text}
          onChange={onChange}
        />
        <button tpye="button">삭제</button>
      </header>
      <main>
        <dl>
          <dt>선택</dt>
          <dd>
            <input type="checkbox" />
          </dd>

          <dt>하이라이트</dt>
          <dd></dd>

          <dt></dt>
        </dl>
      </main>
    </div>
  );
}

export default CompareList;
