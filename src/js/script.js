var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('sidebar-closed');
  sidebar.classList.toggle('sidebar-open');
}


let swiperrr = new Swiper('.swiperwidht', {
  slidesPerView: 4,
  spaceBetween:2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let BASEURL = new URL("http://localhost:3000/data");

async function getData() {
    try {
        const response = await fetch(BASEURL);
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        const datas = await response.json();
        datass(datas);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function datass(datas) {
    let takeElement = document.querySelector(".card_container_from_api");
    takeElement.innerHTML = '';
    datas.forEach(item => {
        takeElement.insertAdjacentHTML('beforeend', `
            <div class="deletter product-card flex w-[400px] p-5 text-center overflow-hidden gap-[100px] h-[600px] justify-between">
                <div class="bg-bgcolor">
                    <div class="product-image-container bg-bgcolor relative w-full h-[400px]">
                        <img src="${item?.imageSrc}" alt="" class="main-image w-full h-full object-cover transition-opacity duration-1000 ease">
                        <img src="${item?.hoverImgSrc}" alt="" class="hover-image absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out transform scale-100">
                        <div class="icon-box bg-white p-2.5 absolute top-2.5 right-2.5 flex flex-col opacity-0 w-[50px] h-[90px] gap-[0.7rem] transform translate-x-1/4 transition-transform duration-700 ease">
                            <i class="fa fa-search text-black text-[20px] my-[5px]"></i>
                            <i class="fa-regular fa-heart text-black text-[20px] my-[5px]"></i>
                        </div>
                    </div>
                    <div class="product-info mt-3.5">
                        <div class="color-options flex justify-center mb-1.5">
                            <span class="color black w-[15px] h-[15px] bg-black rounded-full mx-[3px]"></span>
                            <span class="color white w-[15px] h-[15px] bg-white border border-gray-300 rounded-full mx-[3px]"></span>
                            <span class="color beige w-[15px] h-[15px] bg-[#f5deb3] rounded-full mx-[3px]"></span>
                        </div>
                        <h2 class="text-black text-[18px] my-1.5">${item?.productName}</h2>
                        <div class="rating text-[#FFD700] mb-1.5">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="price mb-2.5">
                            <span class="discounted-price text-black font-bold">$${item?.productPrice}</span>
                        </div>
                        <button class="px-[15px] py-[10px] bg-[#5e6821] text-white border-none cursor-pointer transition duration-1000 ease hover:bg-[#4e5a03]">Select options</button>
                        <button id="${item.id}" onclick="deleteItem('${item.id}')" class="deletebtn px-[15px] py-[10px] bg-[#5e6821] text-white border-none cursor-pointer transition duration-1000 ease hover:bg-[#4e5a03]">delete</button>
                    </div>
                </div>
            </div>
        `);
    });
}

getData();

async function deleteItem(id) {
    try {
        const response = await fetch(`http://localhost:3000/data/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }

        // Remove item from DOM
        document.getElementById(id).closest('.deletter').remove();
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}
