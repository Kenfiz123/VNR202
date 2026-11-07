# Mở khóa VF3

Mở `dist/index.html` bằng trình duyệt để chơi. Bản thử chạy trực tiếp từ tệp và không cần cài thư viện.

Trong bãi có 10 chiếc VF3. Hai xe có hai nhân vật theo ảnh tham chiếu bên trong, tám xe còn lại trống. Chọn đáp án và bấm **Kiểm tra**. Nếu trả lời sai, game đánh dấu đáp án đúng, hiện nội dung đáp án và giải thích rồi chờ bạn bấm **Câu tiếp theo**. Mỗi câu đúng cho bạn tự chọn một xe chưa mở. Cửa xe xoay ra ngoài rồi game báo kết quả. Khi tìm thấy xe có người, game hiện **BẠN ĐÃ TÌM ĐƯỢC CHỊ MAI**. Tìm đủ hai xe có người trong 20 câu hỏi để thắng. Nếu hết câu hỏi, game tổng kết lượt chơi và cho phép chơi lại. Khi chơi lại, game xáo vị trí hai xe có người.

Đoạn MP3 đã cung cấp được lưu tại `dist/assets/vf3-door.mp3` và tự phát khi bạn chọn xe. Cửa mở sau nhịp đầu của đoạn nhạc, rồi nhạc tiếp tục trong màn kết quả. Để đổi nhạc, vào **Cách chơi** rồi chọn một tệp MP3, M4A hoặc WAV đã cắt còn tối đa 8 giây.

Hai mươi câu hỏi VNR202 do người dùng cung cấp nằm trong mảng `rounds` của `dist/game.js`, kèm đáp án và giải thích đã rà soát nguồn. Các số liệu kinh tế năm 2020 được ghi rõ mốc công bố, câu về quan hệ Việt–Mỹ dùng mốc tuyên bố bình thường hóa và số lượng sĩ quan gìn giữ hòa bình được tính theo lượt triển khai.

Ảnh xe đóng cửa `dist/assets/vf3-closed.png` dựa trên ảnh tham chiếu đã cung cấp. Ảnh minh họa `dist/assets/vf3-open.jpg` được tạo bằng ImageGen tích hợp, với yêu cầu mở cửa bên lái khoảng 65° để lộ ghế và khoang lái, đồng thời giữ góc máy, chiếc xe, sân và ánh sáng của ảnh gốc. Khi mở xe có người, game dùng ảnh `dist/assets/vf3-occupied.jpg`. Ảnh này được dựng bằng ImageGen tích hợp từ cảnh mở cửa và ảnh hai nhân vật người dùng gửi, với người nam ngồi gần cửa và người nữ ở phía trong. Tệp ảnh kết quả có kích thước 1256 × 844. Ảnh tham chiếu TikTok chỉ được dùng cho nhân vật. Ảnh xe gốc có dòng chữ “XEOTOVINFAST.COM.VN”, đã được chỉnh bằng ImageGen trong phiên bản trước.

<details>
<summary>Prompt tạo ảnh mở cửa</summary>

> Precise photo edit for a 2-state browser game. The single input image is the edit target. Recreate the exact same landscape frame with the same crop and 628:422 aspect ratio, same camera height and position, same daytime courtyard background, the same white VinFast VF 3 in profile facing left, same silhouette, body and wheels in the same positions and scale. Only change the one large visible driver's side front door from closed to swung outward about 65 degrees on its forward hinge (at the left side of the door, just aft of the front wheel), toward the camera. The dark interior, seat and footwell should be visible inside the newly open doorway. Keep the whole car in frame, and the rear side panel, fixed rear side window, roof, wheels, reflections and lighting as close to the original as possible for a seamless state transition. No people and no added objects or text. Preserve any existing photographer credit at the bottom. Natural realistic photography. This should read at a glance as the exact same car parked in the same place with its door visibly open.

</details>

<details>
<summary>Prompt đổi quần dài cho người nam</summary>

> Use case: precise-object-edit. Asset type: an existing occupied VF3 browser-game photo with exact animation alignment. The single input is the exact edit target. Make one small clothing edit only: change the seated man's light shorts into full-length charcoal-gray trousers that cover his thighs, knees and lower legs down to his ankles. Use natural trouser fabric, realistic seated folds and the same bent-leg pose. Keep his existing black shoes and exposed hands/forearms in the exact same positions, with hands and forearms visibly in front of the new trousers. Keep the man's face, head, hair, white polo, posture, body proportions and the woman exactly as in the input. Lock every car, open-door, mirror, hinge, door-trim, seat, steering wheel, wheel, courtyard and background feature to its existing pixel location. Exact same landscape composition and 1256:844 aspect ratio, same crop and scale. This photo must match other game frames, so modify only the pants region. No text or extra elements. Natural realistic photographic edit.

</details>

<details>
<summary>Prompt dọn góc ảnh</summary>

> Extremely localized cleanup of the single provided photograph, for a three-state web-game animation where pixel alignment is essential. The provided image is the only edit target. Erase only the little white 'XEOTOVINFAST.COM.VN' overprint near the bottom-right edge below the rear wheel, plus the adjacent black rounded screenshot-control overlay in the very bottom-right corner. Seamlessly reconstruct the small area of real asphalt and lower tire detail hidden by those overlays, matching neighboring texture, road marking edges and lighting. Do not add text, a logo, or a patch. Do not alter any other part of the photo: preserve the exact composition, camera position, landscape aspect ratio, zoom and frame edges, car silhouette, wheel centers, body panels, people if present, colors, shadows, courtyard, foliage and background. Use the existing image as precisely as possible; only retouch the tiny lower-right region.

Thêm một câu tương ứng vào từng prompt để giữ nguyên cửa đóng, khoang trống hoặc hai nhân vật ngồi trong xe.

</details>

<details>
<summary>Prompt tạo ảnh xe có người</summary>

> Use case: identity-preserve, compositing. Asset type: occupied state photo for an existing VF3 browser game with a precisely aligned moving door. Image 1 is the exact edit target and layout lock. Image 2 is the user's identity, hair, clothing and pose reference for the TWO fully clothed adults only. Replace the two existing fictional occupants in Image 1 with the two adults shown in Image 2, preserving their facial likeness recognizably. The man with short black hair, white short-sleeved polo and light shorts sits nearest the camera inside the driver's seat, gently leaning forward with his head slightly lowered and arms reaching toward his knees/footwell, as in the reference. The woman with tied-back hair and white short-sleeved top sits farther inside the passenger seat, her head visible just beyond and above his shoulder, hands near the back of her head as she gathers her hair. Keep both fully seated inside the car with natural proportions, exactly two people, faces discernible in the compact cabin, ordinary neutral expressions. Match the existing daytime light rather than importing the nighttime color cast. Preserve the edit target's entire landscape frame, exact 1256:844 aspect ratio, scale, white VF3 exterior, roof, BOTH wheels, front fender, rear window, camera viewpoint, courtyard background and particularly the OPEN DOOR silhouette, glass, mirror, handle, hinge and inner trim at their exact original pixel positions. Change only the occupants and the small interior regions immediately behind them. This is one static full-car photo and will be composited with the existing empty cabin, so exact door alignment is essential. Do not import any TikTok interface, screenshot controls, play triangle, search bar, watermark, phone bars, lettering or captions from Image 2. No added text anywhere. Keep the original landscape framing, no zoom or crop.

</details>
