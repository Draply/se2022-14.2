# Tìm hiểu về Layer 1 

## Layer 1 là gì?

Mạng layer-1 là tên gọi khác của một blockchain cơ sở. BNB Smart Chain (BNB), Ethereum (ETH), Bitcoin (BTC) và Solana đều là các giao thức layer 1. Chúng ta gọi chúng là layer 1 vì đây là các mạng chính trong hệ sinh thái của chúng. Ngược lại với layer 1, chúng ta có các giải pháp ngoài chuỗi (off-chain) và các giải pháp layer 2 được xây dựng trên các chuỗi chính.

Nói cách khác, một giao thức là layer 1 khi nó xử lý và hoàn thiện các giao dịch trên blockchain của chính nó. Nó cũng có token gốc của riêng mình, được sử dụng để thanh toán phí giao dịch.



## Mở rộng layer 1

Một vấn đề phổ biến với mạng layer 1 là chúng không có khả năng mở rộng quy mô. Bitcoin và các blockchain lớn khác đã phải vật lộn để xử lý các giao dịch trong thời điểm nhu cầu gia tăng. Bitcoin sử dụng cơ chế đồng thuận Proof of Work (PoW), cơ chế này đòi hỏi nhiều tài nguyên tính toán. 

Trong khi PoW đảm bảo tính phi tập trung và bảo mật, mạng PoW cũng có xu hướng chậm lại khi khối lượng giao dịch quá cao. Điều này làm tăng thời gian xác nhận giao dịch và làm cho phí đắt hơn.

Các nhà phát triển blockchain đã làm việc trên các giải pháp khả năng mở rộng trong nhiều năm, nhưng vẫn còn rất nhiều cuộc thảo luận đang diễn ra liên quan đến các giải pháp thay thế tốt nhất. Để mở rộng layer 1, một số tùy chọn bao gồm:

1. Tăng kích thước khối , cho phép nhiều giao dịch được xử lý hơn trong mỗi khối.

2. Thay đổi cơ chế đồng thuận được sử dụng, chẳng hạn như với bản cập nhật Ethereum 2.0 sắp tới.

3. Thực thi sharding. Một dạng phân vùng cơ sở dữ liệu.

Cải tiến layer 1 yêu cầu thực hiện nhiều công việc. Trong nhiều trường hợp, không phải tất cả người dùng mạng đều đồng ý với sự thay đổi. Điều này có thể dẫn đến sự chia rẽ cộng đồng hoặc thậm chí là một đợt hard fork, như đã xảy ra với Bitcoin và Bitcoin Cash vào năm 2017.

### SegWit

Một ví dụ về giải pháp để layer 1 mở rộng quy mô là SegWit (nhân chứng tách biệt) của Bitcoin. Giao thức này đã làm tăng thông lượng của Bitcoin bằng cách thay đổi cách tổ chức dữ liệu khối (chữ ký điện tử không còn là một phần của đầu vào giao dịch). Thay đổi đã giải phóng thêm không gian cho các giao dịch trên mỗi khối mà không ảnh hưởng đến bảo mật của mạng. SegWit đã được triển khai thông qua một soft fork tương thích ngược. Nói cách khác, các node Bitcoin không cập nhật SegWit vẫn có thể xử lý các giao dịch.



## Sharding layer là gì?

Sharding là một giải pháp mở rộng quy mô layer 1 phổ biến được sử dụng để tăng thông lượng giao dịch. Kỹ thuật này là một dạng phân vùng cơ sở dữ liệu có thể được áp dụng cho các sổ cái phân tán blockchain. Mạng và các node được chia thành các phân đoạn khác nhau để phân tán khối lượng công việc và cải thiện tốc độ giao dịch. Mỗi phân đoạn quản lý một tập hợp con hoạt động của toàn mạng, có nghĩa là nó có các giao dịch, node và khối riêng biệt.

Với sharding, không cần mỗi node duy trì một bản sao đầy đủ của toàn bộ blockchain. Thay vào đó, mỗi node báo cáo lại công việc đã hoàn thành cho chuỗi chính để chia sẻ trạng thái dữ liệu cục bộ của chúng, bao gồm số dư của địa chỉ và các chỉ số chính khác.



## So sánh layer 1 với layer 2

Khi nói đến cải tiến, không phải mọi thứ đều có thể giải quyết được ở layer 1. Do những hạn chế về công nghệ, một số thay đổi nhất định rất khó hoặc gần như không thể thực hiện trên mạng blockchain chính. Ví dụ, Ethereum đang nâng cấp lên Proof of Stake (PoS), nhưng quá trình này đã mất nhiều năm để hoàn thành.

Một số trường hợp sử dụng chỉ đơn giản là không thể hoạt động với layer 1 do các vấn đề về khả năng mở rộng. Một trò chơi blockchain thực tế không thể sử dụng mạng Bitcoin do thời gian giao dịch kéo dài. Tuy nhiên, trò chơi vẫn có thể muốn sử dụng tính năng bảo mật và phi tập trung của layer 1. Cách tốt nhất là xây dựng trò chơi trên một mạng có giải pháp layer 2.

### Lightning Network

Các giải pháp layer 2 xây dựng trên layer 1 và dựa vào đó để hoàn thiện các giao dịch của mình. Một ví dụ nổi tiếng là Lightning Network. Với lưu lượng truy cập lớn, mạng Bitcoin có thể mất hàng giờ để xử lý các giao dịch. Lightning Network cho phép người dùng thực hiện thanh toán nhanh chóng bằng Bitcoin ở ngoài chuỗi chính và số dư cuối cùng được báo cáo trở lại chuỗi chính. Về cơ bản, đây là việc gói các giao dịch của mọi người thành một bản ghi cuối cùng, giúp tiết kiệm thời gian và tài nguyên. 

## Tóm lược

Layer 1 (lớp thứ nhất) đề cập đến một mạng cơ sở, chẳng hạn như Bitcoin, BNB Chain hoặc Ethereum và cơ sở hạ tầng cơ bản của nó. Các blockchain layer 1 có thể xác thực và hoàn thiện các giao dịch mà không cần mạng khác. Như chúng ta đã thấy với Bitcoin, việc cải thiện khả năng mở rộng của mạng layer 1 là rất khó. Vì vậy, các nhà phát triển đã đưa ra giải pháp tạo ra các giao thức layer 2 dựa trên mạng layer 1 để bảo mật và đồng thuận. Lightning Network của Bitcoin là một ví dụ về giao thức layer 2. Nó cho phép người dùng thực hiện các giao dịch một cách tự do trước khi ghi chúng vào chuỗi chính.
