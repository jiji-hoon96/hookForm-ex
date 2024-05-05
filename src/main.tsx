import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Test2EH from "./test2/EH/test2";
import Test2HJ from "./test2/HJ/test2";
import Test2JH from "./test2/JH/test2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>아래 링크를 타고 작업한 내용 확인하면서 진행하면 됩니다.</h1>
        <h3>patient create를 최대한 구현해주세요</h3>
        <p>
          스타일은 중요하지 않습니다. 외부 라이브러리 사용하지 않고 최대한으로
          작업해주세요!
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link to="patientCreate-EH">은한씩 작업</Link>
          <Link to="patientCreate-HJ">현지씨 작업</Link>
          <Link to="patientCreate-JH">이지훈 작업</Link>
        </div>
      </>
    ),
  },
  {
    path: "patientCreate-EH",
    element: <Test2EH />,
  },
  {
    path: "patientCreate-HJ",
    element: <Test2HJ />,
  },
  {
    path: "patientCreate-JH",
    element: <Test2JH />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
