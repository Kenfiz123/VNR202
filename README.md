# Mở khóa VF3

Mở `dist/index.html` bằng trình duyệt để chơi. Bản thử chạy trực tiếp từ tệp và không cần cài thư viện.

Trong bãi có 10 chiếc VF3. Hai xe có hai nhân vật hư cấu bên trong, tám xe còn lại trống. Chọn đáp án và bấm **Kiểm tra**. Nếu trả lời sai, game đánh dấu đáp án đúng, hiện nội dung đáp án và chờ bạn bấm **Câu tiếp theo**. Mỗi câu đúng cho bạn tự chọn một xe chưa mở. Cửa xe xoay ra ngoài rồi game báo kết quả. Tìm đủ hai xe có người trong 10 câu hỏi để thắng. Nếu hết câu hỏi, game tổng kết lượt chơi và cho phép chơi lại. Khi chơi lại, game xáo vị trí hai xe có người.

Đoạn MP3 đã cung cấp được lưu tại `dist/assets/vf3-door.mp3` và tự phát khi bạn chọn xe. Cửa mở sau nhịp đầu của đoạn nhạc, rồi nhạc tiếp tục trong màn kết quả. Để đổi nhạc, vào **Cách chơi** rồi chọn một tệp MP3, M4A hoặc WAV đã cắt còn tối đa 8 giây.

Mười câu hỏi mẫu về lịch sử Việt Nam nằm trong mảng `rounds` của `dist/game.js`. Ảnh xe đóng cửa `dist/assets/vf3-closed.png` dựa trên ảnh tham chiếu đã cung cấp. Ảnh minh họa `dist/assets/vf3-open.jpg` được tạo bằng ImageGen tích hợp, với yêu cầu mở cửa bên lái khoảng 65° để lộ ghế và khoang lái, đồng thời giữ góc máy, chiếc xe, sân và ánh sáng của ảnh gốc. Khi mở xe có người, game dùng ảnh `dist/assets/vf3-occupied.jpg`, tạo từ cảnh mở cửa và minh họa hai nhân vật hư cấu đang ngồi ở ghế trước. Cả ba ảnh dùng trong game đã được chỉnh bằng ImageGen để xóa dòng chữ và nút chụp màn hình ở góc dưới bên phải. Ảnh tham chiếu có dòng chữ “XEOTOVINFAST.COM.VN”.

<details>
<summary>Prompt tạo ảnh mở cửa</summary>

> Precise photo edit for a 2-state browser game. The single input image is the edit target. Recreate the exact same landscape frame with the same crop and 628:422 aspect ratio, same camera height and position, same daytime courtyard background, the same white VinFast VF 3 in profile facing left, same silhouette, body and wheels in the same positions and scale. Only change the one large visible driver's side front door from closed to swung outward about 65 degrees on its forward hinge (at the left side of the door, just aft of the front wheel), toward the camera. The dark interior, seat and footwell should be visible inside the newly open doorway. Keep the whole car in frame, and the rear side panel, fixed rear side window, roof, wheels, reflections and lighting as close to the original as possible for a seamless state transition. No people and no added objects or text. Preserve any existing photographer credit at the bottom. Natural realistic photography. This should read at a glance as the exact same car parked in the same place with its door visibly open.

</details>

<details>
<summary>Prompt dọn góc ảnh</summary>

> Extremely localized cleanup of the single provided photograph, for a three-state web-game animation where pixel alignment is essential. The provided image is the only edit target. Erase only the little white 'XEOTOVINFAST.COM.VN' overprint near the bottom-right edge below the rear wheel, plus the adjacent black rounded screenshot-control overlay in the very bottom-right corner. Seamlessly reconstruct the small area of real asphalt and lower tire detail hidden by those overlays, matching neighboring texture, road marking edges and lighting. Do not add text, a logo, or a patch. Do not alter any other part of the photo: preserve the exact composition, camera position, landscape aspect ratio, zoom and frame edges, car silhouette, wheel centers, body panels, people if present, colors, shadows, courtyard, foliage and background. Use the existing image as precisely as possible; only retouch the tiny lower-right region.

Thêm một câu tương ứng vào từng prompt để giữ nguyên cửa đóng, khoang trống hoặc hai nhân vật ngồi trong xe.

</details>

<details>
<summary>Prompt tạo ảnh xe có người</summary>

> Precise localized photographic edit for an occupied-versus-empty state in a browser game. Image 1 is the exact edit target. Preserve the same full landscape frame, aspect ratio, camera position, roofline, tires, body panels, one already open driver-side door, steering wheel, lighting, background courtyard, and existing photographer credit. Add EXACTLY TWO fictional, unrelated-to-any-real-person adult Vietnamese characters seated fully INSIDE this white VinFast VF 3, in the two front seats, visible THROUGH the existing open doorway. Nearest camera, at the right of the opening, an adult woman in an ivory short-sleeve top and dark jeans sits back on the original visible driver's seat with hips firmly on the cushion and both feet in the footwell. In the far passenger seat, an adult man wearing a muted blue collared shirt sits slightly forward, so his distinct head and upper torso are also clearly visible just to the left of the driver in the cabin opening. Place the two heads side-by-side with space between their profiles; make both people unambiguously readable even at small screen size, neither in silhouette nor obscured behind the other. They are relaxed, fully clothed, ordinary fictional occupants with neutral expressions. Use natural light entering the open door, realistic body proportions in the compact cabin and correct occlusion by the steering wheel and door frame. No person outside, no one standing, no icons, no captions, no extra people. Do not move the camera or change the crop. Keep all exterior pixels as close to Image 1 as possible; only the visible interior changes from empty to occupied.

</details>
