import React from "react";
import "./ExampleOne.scss";

function ExampleOne() {
  return (
    <div id="example-one">
      <header>
        <h1>React Styling</h1>
      </header>

      <article>
        <h2>리액트 스타일링 공부~!</h2>

        <section>
          <h3>이 것은 첫 번째 섹션</h3>
          <p>첫 번째 섹션의 첫 번째 문단</p>
          <p>첫 번째 섹션의 두 번째 문단</p>
        </section>

        <section>
          <h3>이 것은 두 번째 섹션</h3>
          <p>두 번째 섹션의 첫 번째 문단</p>
          <p>두 번째 섹션의 두 번째 문단</p>
        </section>
      </article>
    </div>
  );
}

export default ExampleOne;
