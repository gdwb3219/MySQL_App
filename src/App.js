// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "@css/style.css";

// import BoardList from "@components/BoardList";
// import BoardNew from "@components/BoardNew";
// import BoardContent from "@components/BoardContent";
// import Footer from "@components/Footer";

// // axios 추가
// import axios from "axios";

// function App() {
//   // 서버에서 받은 데이터를 console로 찍어서 확인한다.
//   useEffect(() => {
//     axios
//       .get("/api/test")
//       .then((res) => console.log(res))
//       .catch();
//   });

//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <Routes>
//             <Route path="/" component={BoardList} exact />
//             <Route path="/BoardNew" component={BoardNew} exact />
//             <Route path="/BoardContent" component={BoardContent} exact />
//           </Routes>
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
// import "./App.css";

export default function App() {
  const [testId, setTestId] = useState("");

  const handleChange = (e) => {
    setTestId(e.target.value);
  };

  const submitId = () => {
    const post = {
      plzid: testId,
    };

    fetch("http://localhost:3001/idplz", {
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={submitId}>Submit</button>
      <h1>{testId}</h1>
    </div>
  );
}
