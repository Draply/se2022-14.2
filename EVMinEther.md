## EVM trong Solidity :
EVM (Ethereum Virtual Machine) là máy ảo Ethereum. Có thể hiểu đơn giản là các EVM sẽ đóng vai trò trung gian trong việc thực thi các smart contract 
(hợp đồng thông minh) ở trên mạng lưới Ethereum. Mỗi một Ethereum node được trang bị một EVM riêng, điều này sẽ đảm bảo tính bảo mật và phi tập trung của mạng lưới.

![image](https://user-images.githubusercontent.com/74479681/202912426-a3243d17-1a2a-4d8c-aab6-03c41c009747.png)

Ngoài ra đối với các Developer thì chúng ta cần biết thêm về EVM blockchain. 
## Vậy EVM blockchain là gì ?

EVM blockchain là các blockchain tương thích máy ảo Ethereum, điều này đồng nghĩa với việc các smart contract của Ethereum có thể được chạy trên các blockchain đó. 
Nói một cách khác, chỉ cần điều chỉnh một chút, thì các Dapps (ứng dụng phi tập trung) trên Ethereum có thể chạy được trên EVM blockchain. Một số ví dụ của 
EVM blockchain là Fantom, Celo, Avax C-Chain, BSC,... 
### Lợi ích đối với Developers & Team dự án
- Không mất thời gian làm quen: Đối với các developer dù mới hay có kinh nghiệm cũng sẽ rất tốn thời gian để nghiên cứu và làm quen với một ngôn ngữ lập trình mới. Nhưng giờ đây, với công nghệ EVM, các dev có thể “nhảy” giữa các blockchain với nhau dễ dàng hơn.

- Nhận diện thương hiệu: Sản phẩm của team dự án khi được triển khai trên các blockchain khác, về giao diện sẽ có thể được giữ nguyên hoặc thay đổi tùy theo nhu cầu của dự án. Vậy nên thay vì lập một dự án hoàn toàn mới, thì team chỉ cần một chút chỉnh sửa cho phù hợp là có thể triển khai dự án trên Ethereum của mình lên trên EVM blockchain.

- Sản phẩm sẽ được nhân rộng: Thay vì bị giới hạn ở trong một blockchain nhất định, thì sản phẩm của team sẽ được mở rộng ra các blockchain khác ⇒ Mở rộng sức ảnh hưởng và thu hút nhiều users.

### Ta có thể chia EVM Blockchain làm 2 loại :
+ Layer 2 
+ EVM Blockchain độc lập

![image](https://user-images.githubusercontent.com/74479681/202912770-7bbf43aa-155d-44f6-b364-1d9fa5b676a4.png)

#### Layer 2 như các dự án lớn ta có thể kể đến như DyDx , Optimistic đang rất hot trong năm nay đại diện cho mảng NFT với tokem OP, ...4
#### EVM Blockchain độc lập ta có thể kể tới như 
- Binanace Smart Chain (BSC) đại diện cho sàn giao dịch Crypto lớn nhất hiện nay Binance đứng đầu bởi CZ, Hệ sinh thái BSC có hơn 900 ứng dụng DeFi, trong đó có hơn 
50 dự án sàn giao dịch phi tập trung (DEXs). Và thành công nhất với dự án DEX PancakeSwap với hơn $5 tỷ đô TVL. 
- Near Protocol là dự án Aurora EVM được coi là một mảnh ghép quan trọng nhất, bởi vì nó giúp Near Protocol tương thích với EVM. Điều này có nghĩa là Aurora có thể 
thu hút các Dapps về hệ sinh thái Near. Đặc biệt trong tháng 10, Aurora công bố các đối tác lớn như là Sushi, Aave, Dodo, 1inch,... sẽ phát triển sản phẩm của họ 
trên cả Near Protocol. Đặc biệt Near là hệ sinh thái có nhiều Dapps nhất hiện nay, được cộng đồng dev nước ngoài cực kì ưa thích, đặc biệt Near cũng chi rất mạnh tay 
khi sẵn sàn Airdrop chính token Near của mình cho dự án Learn To Earn đầy tham vọng của dự án.

![image](https://user-images.githubusercontent.com/74479681/202913178-efc4b2c5-2b1b-43ae-be25-0eec86cd1994.png)

## Rủi ro và hạn chế của các EVM Blockchain

EVM blockchain có rất nhiều ưu điểm và có thể coi là một công nghệ “bất ly thân”, nhưng liệu có những hạn chế hay nhược điểm nào cho công nghệ này?

1. Giảm tính bảo mật & Rủi ro bị hack

EVM là một công nghệ giúp các dự án có thể triển khai trên nhiều blockchain khác nhau. Nhưng khi bị tấn công liên chuỗi (cross-chain attack) như Poly Network 
vào tháng 8/2021, điều này gây ra “chết trùm” và thiệt hại sẽ là rất lớn.

2. Thanh khoản bị phân mảnh

Dự án có mặt ở nhiều blockchain thì thanh khoản sẽ chỉ tồn tại ở blockchain đó và không liên kết lại được với nhau. Mặc dù có bridge để chuyển các token qua 
lại giữa các blockchain, nhưng lại có hạn chế về phí, thời gian chuyển và rủi ro bảo mật. Các ứng dụng DeFi mà thanh khoản thấp thì sẽ gây ảnh hưởng rất lớn tới lợi ích và trải nghiệm người dùng. 

3. Audit nhiều smart contract trên nhiều blockchain: 

Chi phí cho audit smart contract ngày càng đắt đỏ, khi mà các dự án muốn gây dựng uy tín thì càng hiểu audit là một việc rất cần thiết. 
 
## Ngoài ra còn có Non-EVM Blockchain. Vậy Non-EVM Blockchain là gì? 

Định nghĩa

Trái ngược hẳn với EVM blockchain, non-EVM blockchain là những Blockchain không tương tích với EVM. Có thể kể tới các non-EVM blockchain 
như là Cardano, Solana, Algorand, Terra, Avalanche X-Chain,...

Đặc điểm chính của các non-EVM blockchain là sử dụng ngôn ngữ lập trình smart contracts khác so với Solidity trên Ethereum, như là:

+ Cardano dùng Haskell/Plutus.
+ Solana dùng Rust/C/C++.
+ Terra dùng Rust.
+ Algorand dùng TEAL (Transaction Execution Approval Language).
+ Gần đây nhất là Aptos dùng Move để phát triển.
Ta có thể thấy sẽ là rất khó cho các dự án trên Ethereum có thể lên được các non-EVM blockchain. Nếu muốn thì các dự án phải xây dựng lại từ đầu và code theo ngôn ngữ smart contracts theo từng blockchain, điều này thì không dự án nào muốn làm cả.
### Lợi thế & Hạn chế
Vì đặc điểm chính của các non-EVM blockchain là sử dụng ngôn ngữ lập trình smart contract khác nhau. Vậy nên lợi thế và hạn chế chủ yếu sẽ xoay quanh điều này.

#### Lợi thế: Các non-EVM blockchain sẽ sở hữu một cộng đồng developer riêng và họ sẽ được các chương trình ưu tiên để thúc đẩy phát triển của cả hệ sinh thái. Các sản phẩm trong hệ sinh thái lúc này sẽ đến từ chính cộng đồng developer này.
#### Hạn chế: Câu hỏi khó của các non-EVM blockchain là làm sao để xây dựng được một cộng đồng developer mạnh. Vì họ là builder chính của cả hệ sinh thái, nên mỗi non-EVM blockchain sẽ có một chiến lược cũng như hướng phát triển khác nhau.

Phần này ta hãy cùng tìm hiểu qua về Solana một dự án EVM non BlockChain rất thành công trong năm 2021.
