Link Drive : https://drive.google.com/drive/folders/1UXa0V2DxIJ0dITqKCNsgRLRcqq0mt2-V?usp=sharing

Bạn đã hiểu đúng phần “bề mặt” rồi 👍. Giờ mình sẽ giải thích luồng chạy thật sự của code + cách kiểm tra + hiển thị kết quả.

1️⃣ Luồng chạy của component React

Giả sử component như này:

import { useState, useEffect } from "react";

function UserLists() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
}

Luồng chạy thực tế:

Bước 1 — React render lần đầu

Component chạy từ trên xuống:

UserLists()

State lúc này:

users = []

UI render:

User List
(Chưa có user nào)
Bước 2 — useEffect chạy sau khi render
useEffect(() => {
  fetchUsers();
}, []);

[] nghĩa là:

chỉ chạy 1 lần sau khi component mount

Lúc này React gọi:

fetchUsers()
Bước 3 — gọi API
const response = await fetch(url)

Trình duyệt gửi request:

GET https://jsonplaceholder.typicode.com/users

Server trả về JSON.

Bước 4 — chuyển sang object JS
const data = await response.json()

JSON từ server:

[
 { "id":1, "name":"Leanne Graham", "email":"..." },
 { "id":2, "name":"Ervin Howell", "email":"..." }
]

được chuyển thành JavaScript object.

Bước 5 — cập nhật state
setUsers(data)

React làm 2 việc:

1️⃣ lưu data vào state

users = data

2️⃣ trigger render lại component

Bước 6 — render lại UI

Lần render thứ 2:

users = [10 users]

React chạy đoạn này:

users.map(...)

UI hiển thị:

User List
Leanne Graham - email
Ervin Howell - email
...
2️⃣ Lỗi trong code bạn gửi

Code của bạn:

const data = response.json();

thiếu await

Phải là:

const data = await response.json();

Nếu không thì data là Promise, không phải dữ liệu.

3️⃣ Kiểm tra kết quả bằng console (quan trọng)

Bạn có thể debug bằng:

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);   // xem dữ liệu trong console

  setUsers(data);
}

Sau đó mở Developer Tools

F12

→ tab Console

Bạn sẽ thấy:

(10) [{...}, {...}, {...}]
4️⃣ Kiểm tra request API

Mở:

F12

→ tab Network

→ reload trang

Bạn sẽ thấy request:

users   200 OK

Click vào sẽ thấy:

Headers

Response JSON

Status code

5️⃣ Cách kiểm tra lỗi (rất quan trọng)

Thêm try / catch

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    setUsers(data);
  } catch (error) {
    console.error("API lỗi:", error);
  }
}

Nếu API lỗi sẽ thấy trong console:

API lỗi: TypeError: Failed to fetch
6️⃣ Hiển thị dữ liệu ra UI

React hiển thị bằng:

users.map((user) => (
  <p key={user.id}>
    {user.name} - {user.email}
  </p>
))

React sẽ tạo DOM như:

<p>Leanne Graham - Sincere@april.biz</p>
<p>Ervin Howell - Shanna@melissa.tv</p>
7️⃣ Flow tổng thể (rất quan trọng)

Toàn bộ quá trình:

Render component
      ↓
useEffect chạy
      ↓
fetchUsers()
      ↓
fetch API
      ↓
response.json()
      ↓
setUsers(data)
      ↓
React render lại
      ↓
users.map() hiển thị UI
8️⃣ Mẹo debug React mà dev dùng

3 cách phổ biến:

1️⃣ console.log
console.log(users)
2️⃣ React DevTools

Extension:

React Developer Tools

Xem state trực tiếp.

3️⃣ Network tab

Xem request API.

💡 Nếu bạn muốn mình có thể giải thích tiếp 3 thứ rất quan trọng khi fetch API trong React:

1️⃣ Loading state (hiển thị "Loading...")
2️⃣ Error handling chuẩn trong React
3️⃣ Tại sao fetch API thường đặt trong useEffect

Ba cái này là 90% dev React phải biết.
