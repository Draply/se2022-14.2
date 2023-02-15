# Mô tả sản phẩm : 
Đây là một sản phẩm dựa trên ERC20, với chức năng mint và bán token cho người mua. Về cơ bản chức năng của sản phẩm giống cơ chế hoạt đông của một trang crowdfund, presale cho cộng đồng trước khi release của phần lớn các đồng tiền hiện nay.







# Setup 
## Cài dặt các gói tập tin liên quan  
npm i 
## Vào trong client để thêm tiếp các tập tin cần sử dụng 
- cd ./Client 
- npm i 

## Chạy node  (Lúc này cần ở bên ngoài thư mục Client)
npx hardhat node 
## Deploy contract với local net.

npx hardhat run --network  localhost scripts/deploy.js

## Vào trong thư mục CLient và tiến hành khởi chạy 
npm start 
