'use client';

import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import { Images } from "@/utils/images";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Foot from "@/components/Foot";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/store/cartSlice';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const products = [
    {
      id: '1',
      image: Images.Gamepad,
      Name: `HAVIT HV-G92 Gamepad`,
      Price: `$120`,
      DiscountPrice: <del>$160</del>,
      Star: Images.FiveStar,
      Favourite: Images.Heart,
      See: Images.Eye,
      PercentDiscount: `-40%`,
    },
    {
      id: '2',
      image: Images.Keyboard,
      Name: `AK-900 Wired Keyboard`,
      Price: `$960`,
      DiscountPrice: <del>$1160</del>,
      Star: Images.FourStar,
      Favourite: Images.Heart,
      See: Images.Eye,
      PercentDiscount: `-35%`,
    },
    {
      id: '3',
      image: Images.Television,
      Name: `IPS LCD Gaming Monitor`,
      Price: `$370`,
      DiscountPrice: <del>$400</del>,
      Star: Images.FiveStar,
      Favourite: Images.Heart,
      See: Images.Eye,
      PercentDiscount: `-30%`,
    },
    {
      id: '4',
      image: Images.Chair,
      Name: `S-Series Comfort Chair`,
      Price: `$3750`,
      DiscountPrice: <del>$400</del>,
      Star: Images.FourHalfStar,
      Favourite: Images.Heart,
      See: Images.Eye,
      PercentDiscount: `-25%`,
    },
  ]

const products1 = [
  {
    id: '5',
    image: Images.OrangeShirt,
    name: 'The north coat',
    price: '$260',
    discountPrice: '$360',
    star: Images.FiveStar,
    favourite: Images.Heart,
    see: Images.Eye,
  },
  {
    id: '6',
    image: Images.Bag,
    name: 'Gucci duffle bag',
    price: '$960',
    discountPrice: '$1160',
    star: Images.FourHalfStar,
    favourite: Images.Heart,
    see: Images.Eye,
  },
  {
    id: '7',
    image: Images.CpuCooler,
    name: 'RGB liquid CPU Cooler',
    price: '$160',
    discountPrice: '$170',
    star: Images.FourHalfStar,
    favourite: Images.Heart,
    see: Images.Eye,
  },
  {
    id: '8',
    image: Images.BookShelf,
    name: 'Small BookShelf',
    price: '$360',
    discountPrice: '',
    star: Images.FourHalfStar,
    favourite: Images.Heart,
    see: Images.Eye,
  },
];

const products2 = [
  {
    id: '9',
    image: Images.DogFlyer,
    Name: `Breed Dry Dog Food`,
    Price: `$100`,
    Star: Images.ThreeStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
  {
    id: '10',
    image: Images.RealCamera,
    Name: `CANON EOS DSLR Camera`,
    Price: `$360`,
    Star: Images.FourStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
  {
    id: '11',
    image: Images.LapTop,
    Name: `ASUS FHD Gaming Laptop`,
    Price: `$700`,
    Star: Images.FiveStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
  {
    id: '12',
    image: Images.Makeup,
    Name: `Curology Product Set`,
    Price: `$500`,
    Star: Images.FourStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
  {
    id: '13',
    image: Images.ElectricCar,
    Name: `Kids Electric Car`,
    Price: `$960`,
    Star: Images.FiveStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
  {
    id: '14',
    image: Images.FootballBoot,
    Name: `Jr. Zoom Soccer Cleats`,
    Price: `$1160`,
    Star: Images.FiveStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
  {
    id: '15',
    image: Images.UsbGamepad,
    Name: `GP11 Shooter USB Gamepad`,
    Price: `$660`,
    Star: Images.FourHalfStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
  {
    id: '16',
    image: Images.GreenJacket,
    Name: `Quilted Satin Jacket`,
    Price: `$660`,
    Star: Images.FourHalfStar,
    Favourite: Images.Heart,
    See: Images.Eye,
  },
]


const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-6 text-center text-xl font-bold">
      <div>
        <div className="text-sm font-normal">Days</div>
        <span>{String(timeLeft.days).padStart(2, "0")}</span> 
      </div>
      <div>
        <div className="text-sm font-normal">Hours</div>
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
      </div>
      <div>
        <div className="text-sm font-normal">Minutes</div>
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
      </div>
      <div>
        <div className="text-sm font-normal">Seconds</div>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};
const CountdownTimer2 = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-4 lg:gap-6 text-center text-xl font-bold">
      <div className="bg-white rounded-[50%] w-[2.5em] md:w-[4em] lg:w-[4em] h-[4em] md:h-[4em] lg:h-[4em] flex flex-col justify-center">
        <span>{String(timeLeft.days).padStart(2, "0")}</span> 
        <div className="text-sm md:text-sm lg:text-sm font-normal">Days</div>
      </div>
      <div className="bg-white rounded-[50%] w-[2.5em] md:w-[4em] lg:w-[4em] h-[4em] md:h-[4em] lg:h-[4em] flex flex-col justify-center">
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
        <div className="text-sm font-normal">Hours</div> 
      </div>
      <div className="bg-white rounded-[50%] w-[2.5em] md:w-[4em] lg:w-[4em] h-[4em] md:h-[4em] lg:h-[4em] flex flex-col justify-center">
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
        <div className="text-sm font-normal">Minutes</div>
      </div>
      <div className="bg-white rounded-[50%] w-[2.5em] md:w-[4em] lg:w-[4em] h-[4em] md:h-[4em] lg:h-[4em] flex flex-col justify-center">
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        <div className="text-sm font-normal">Seconds</div>
      </div>
    </div>
  );
};

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <Topbar />
      <Navbar />
      <hr className="text-slate-300" />
      <div className="flex flex-col px-[1.5em] pt-[2em] md:[2em] lg:pt-[4em] md:px-[2em] lg:px-[6em] justify-between sm:flex-col md:flex-col lg:flex-row mb-8 lg:mb-0">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1>Woman's Fashion</h1>
            <Image src={Images.RightArrow} alt="" />
          </div>
          <div className="flex justify-between items-center">
            <h1>Men's Fashion</h1>
            <Image src={Images.RightArrow} alt="" />
          </div>
          <h1>Electronics</h1>
          <h1>Home & Lifestyle</h1>
          <h1>Medicine</h1>
          <h1>Sport & Outdoor</h1>
          <h1>Baby's & Toys</h1>
          <h1>Groceries & Pets</h1>
          <h1>Health & Beauty</h1>
        </div>
        <hr className=""/>
        <div className="flex">
          <Image src={Images.ShopNow} alt="" />
        </div>
      </div>

      <div className="flex items-center gap-[1em] px-[2em] pt-[8em] font-semibold md:px-[2em] lg:px-[6em]">
        <div><Image src={Images.OrangeBox} alt=""/></div>
        <h1 className="text-orange-700">Today's</h1>
      </div>

      <div className="flex flex-col items-center justify-between px-[2em] md:px-[2em] lg:px-[6em] py-[1em] sm:flex-col md:flex-col lg:flex-row">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-[1em] items-center sm:gap-[2em] md:gap-[2em] lg:gap-[7em]">
          <h1 className="flex text-3xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl">Flash Sales</h1>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-0 md:mb-2 lg:mb-4"></h2>
            <CountdownTimer targetDate="2025-09-21T00:00:00" />
          </div>
        </div>
        <div className="gap-2 hidden md:hidden lg:flex">
          <div><Image src={Images.Back} alt=""/></div>
          <div><Image src={Images.Forward} alt=""/></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-9 px-[2em] md:px-[2em] lg:px-[5.8em] md:flex-col lg:flex-row items-center sm:gap-4 md:gap-4 lg:gap-2">
        {products.map((product, i) => (
          <div className="relative flex px-[1.3em] items-start flex-col" key={i}>
            <div className="relative bg-slate-200 p-[2em] w-auto rounded-[0.2em] group">
              <div className="relative">
                <Image src={product.image} alt="" />
              </div>
              <h1 className="absolute px-[0.7em] py-[0.2em] bg-orange-700 text-white top-3 left-3 rounded-[0.2em]">
                {product.PercentDiscount}
              </h1>
              <div className="absolute flex flex-col gap-2 top-3 right-3">
                <div>
                  <Image src={product.Favourite} alt="" className="w-[2em] cursor-pointer" />
                </div>
                <div>
                  <Image src={product.See} alt="" className="w-[2em] cursor-pointer" />
                </div>
              </div>

              {/* 👇 This is the button that appears on hover */}
              <button className="bg-black text-white absolute w-full bottom-0 left-0 group-hover:block hidden rounded-br-[0.2em] rounded-bl-[0.2em] py-2 cursor-pointer"  onClick={() =>
                dispatch(addToCart({
                  id: i.toString(),
                  name: product.Name,
                  price: product.Price,
                  image: product.image,
                  quantity: 1,
                }))
              }>
                Add to Cart
              </button>
            </div>
            <div className="items-start">
              <h1 className="font-semibold">{product.Name}</h1>
              <div className="flex gap-4">
                <h1 className="text-orange-700 font-semibold">{product.Price}</h1>
                <h1 className="text-slate-400">{product.DiscountPrice}</h1>
              </div>
              <div><Image src={product.Star} alt=""/></div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-orange-700 px-[2em] py-[0.7em] rounded-[0.2em] self-center mt-[2em] mb-[5em] text-white">View All Products</button>
      <div className="px-[2em] md:px-[2em] lg:px-[6em] my-[3em]">
        <hr className="text-slate-400"/>
      </div>
      
      <div className="flex items-center gap-[1em] px-[2em] md:px-[2em] lg:px-[6em] pt-[2em] font-semibold">
        <div><Image src={Images.OrangeBox} alt=""/></div>
        <h1 className="text-orange-700">Categories</h1>
      </div>

      <div className="flex items-center justify-between px-[2em] md:px-[2em] lg:px-[6em] py-[1em]">
        <div className="flex gap-[7em] items-center">
          <h1 className="flex lg:text-5xl font-semibold text-2xl md:text-3xl">Browse By Category</h1>
        </div>
        <div className="gap-2 flex">
          <div><Image src={Images.Back} alt=""/></div>
          <div><Image src={Images.Forward} alt=""/></div>
        </div>
      </div>

      <div className="px-[6em] py-[2em] flex flex-col gap-5 items-center sm:flex-col md:flex-col lg:flex-row mb-[2em]">
        {[
          {
            name: `Phone`,
            Image: Images.CellPhone,
          },
          {
            name: `Computer`,
            Image: Images.Computer,
          },
          {
            name: `SmartWatch`,
            Image: Images.SmartWatch,
          },
          {
            name: `Camera`,
            Image: Images.Camera,
          },
          {
            name: `HeadPhone`,
            Image: Images.HeadPhone,
          },
          {
            name: `Gamepad`,
            Image: Images.Gamepad2,
          },
        ].map((category, i) => (
          <div key={i} className="flex flex-col gap-3 border-1 rounded-[0.2em] px-[2em] py-[1em] hover:bg-orange-600 hover:border-none items-center w-[20em] cursor-pointer">
            <div><Image src={category.Image} alt=""/></div>
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
      <div className="px-[2em] md:px-[2em] lg:px-[6em] my-[1em]">
        <hr className="text-slate-400"/>
      </div>

      <div className="flex items-center gap-[1em] px-[2em] md:px-[2em] lg:px-[6em] pt-[2em] font-semibold">
        <div><Image src={Images.OrangeBox} alt=""/></div>
        <h1 className="text-orange-700">This Month</h1>
      </div>

      <div className="flex items-center justify-between px-[2em] md:px-[2em] lg:px-[6em] py-[1em]">
        <div className="flex gap-[7em] items-center">
          <h1 className="flex font-semibold text-xl md:text-3xl lg:text-5xl">Best Selling Products</h1>
        </div>
        <button className="bg-orange-700 px-[1em] md:px-[2em] lg:px-[2em] py-[0.9em] text-white rounded-[0.2em] sm:text-xl">View All</button>
      </div>
      <div className="flex flex-col gap-2 mb-9 px-[2em] md:px-[2em] lg:px-[5.8em] sm:flex-col md:flex-col lg:flex-row items-center">
        {products1.map((product, i) => (
          <div className="relative flex px-[1.3em] items-start flex-col" key={i}>
            <div className="relative bg-slate-200 p-[2em] w-auto rounded-[0.2em] group">
              <div className="relative">
                <Image src={product.image} alt="" />
              </div>
              <div className="absolute flex flex-col gap-2 top-3 right-3">
                <div>
                  <Image src={product.favourite} alt="" className="w-[2em] cursor-pointer" />
                </div>
                <div>
                  <Image src={product.see} alt="" className="w-[2em] cursor-pointer" />
                </div>
              </div>

              {/* 👇 This is the button that appears on hover */}
              <button className="bg-black text-white absolute w-full bottom-0 left-0 group-hover:block hidden rounded-br-[0.2em] rounded-bl-[0.2em] py-2 cursor-pointer"  onClick={() =>
                dispatch(addToCart({
                  id: i.toString(),
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                }))
              }>
                Add to Cart
              </button>
            </div>
            <div className="items-start">
              <h1 className="font-semibold">{product.name}</h1>
              <div className="flex gap-4">
                <h1 className="text-orange-700 font-semibold">{product.price}</h1>
                <h1 className="text-slate-400">{product.discountPrice}</h1>
              </div>
              <div><Image src={product.star} alt=""/></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-black rounded-[0.4em] gap-6 lg:gap-6 flex mx-[3em] my-[5em] px-[1.5em] py-[1.7em] md:px-[2em] md:py-[2em] lg:px-[3em] lg:py-[3.2em] lg:mx-[6em] lg:my-[3em] md:mx-[5.5em] md:my-[3em]">
        <div className="flex flex-col justify-between gap-4 lg:gap-0">
          <h1 className="text-green-600">categories</h1>
          <h1 className="text-white font-semibold text-3xl w-[8em] md:text-3xl lg:text-5xl md:w-full">Enhance Your Music Experience</h1>
          <CountdownTimer2 targetDate="2025-09-25T00:00:00" />
          <button className="text-white bg-green-600 px-[1em] py-[0.5em] rounded-[0.2em] w-[8.5em]">Buy Now!</button>
        </div>
        <div className="relative sm:hidden md:hidden lg:block">
          <div className="z-20">
            <Image src={Images.JblSpeaker} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[1em] px-[2em] pt-[8em] font-semibold  md:px-[2em] lg:px-[6em]">
        <div><Image src={Images.OrangeBox} alt=""/></div>
        <h1 className="text-orange-700">Our Products</h1>
      </div>

      <div className="flex flex-col items-center justify-between px-[2em] md:px-[2em] lg:px-[6em] py-[1em] md:flex-col lg:flex-row">
        <h1 className="flex font-semibold text-2xl md:text-3xl lg:text-5xl">Explore Our Products</h1>
        <div className="gap-2 hidden md:hidden lg:flex">
          <div><Image src={Images.Back} alt=""/></div>
          <div><Image src={Images.Forward} alt=""/></div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-[2em] mb-9 sm:px-[2em] md:px-[2em] lg:px-[2.6em] sm:flex-col md:flex-col lg:flex-row items-center flex-wrap">
        {products2.map((product, i) => (
          <div className="relative flex px-[1.3em] items-start flex-col mb-5" key={i} >
            <div className="relative bg-slate-200 p-[2em] w-auto rounded-[0.2em] group h-[16em]">
              <div className="relative justify-center">
                <Image src={product.image} alt="" />
              </div>
              <div className="absolute flex flex-col gap-2 top-3 right-3">
                <div>
                  <Image src={product.Favourite} alt="" className="w-[2em] cursor-pointer" />
                </div>
                <div>
                  <Image src={product.See} alt="" className="w-[2em] cursor-pointer" />
                </div>
              </div>

              {/* 👇 This is the button that appears on hover */}
              <button className="bg-black text-white absolute w-full bottom-0 left-0 group-hover:block hidden rounded-br-[0.2em] rounded-bl-[0.2em] py-2 cursor-pointer"  onClick={() =>
                dispatch(addToCart({
                  id: i.toString(),
                  name: product.Name,
                  price: product.Price,
                  image: product.image,
                  quantity: 1,
                }))
              }>
                Add to Cart
              </button>
            </div>
            <div className="items-start">
              <h1 className="font-semibold">{product.Name}</h1>
              <div className="flex gap-4">
                <h1 className="text-orange-700 font-semibold">{product.Price}</h1>
                <div><Image src={product.Star} alt=""/></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-orange-700 px-[2em] py-[0.7em] rounded-[0.2em] self-center mt-[2em] mb-[5em] text-white">View All Products</button>
      <div className="mx-[1.4em] md:mx-[2em] lg:mx-[6em] md:hidden sm:hidden lg:block">
        <div className="flex gap-4 items-center">
          <div><Image src={Images.OrangeBox} alt=""/></div>
          <h1 className="text-orange-600 font-semibold">Featured</h1>
        </div>
        <h1 className="font-semibold text-3xl mt-4 mb-[2em]">New Arrival</h1>
        <div className="flex flex-col gap-5 items-center justify-between mb-5 lg:flex-row">
          <div className="relative ">
            <div className="bg-black pl-4 pt-[4em]"><Image src={Images.PlayStation} alt="" className="w-[32em] "/></div>
            <div className="absolute bottom-8 flex flex-col gap-2 left-8">
              <h1 className="text-white font-semibold text-2xl">PlayStation 5</h1>
              <h3 className="text-white w-[18em]">Black and white version of the PS5 coming out on sale</h3>
              <u className="text-white"><Link href='/' className="font-semibold">Shop Now</Link></u>
            </div>
          </div>
          <div className="flex-col gap-5 justify-between hidden lg:flex">
            <div className="relative ">
              <div className="bg-black pl-[8em]"><Image src={Images.WomanHat} alt="" className="w-[28em]"/></div>
              <div className="absolute bottom-8 flex flex-col gap-2 left-8">
                <h1 className="text-white font-semibold text-2xl">Women's Collection</h1>
                <h1 className="text-white w-[15em]">Featured woman collection that gives you another vibe</h1>
                <u className="text-white"><Link href='/' className="font-semibold">Shop Now</Link></u>
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <div className="relative">
                <div className="bg-black px-[3em] py-5"><Image src={Images.Speakers2} alt="" className=""/></div>
                <div className="absolute bottom-8 flex flex-col gap-2 left-8">
                  <h1 className="text-white font-semibold text-2xl">Speakers</h1>
                  <h1 className="text-white w-[15em]">Amazon wireless speakers</h1>
                  <u className="text-white"><Link href='/' className="font-semibold">Shop Now</Link></u>
                </div>
              </div>
              <div className="relative">
                <div className="bg-black px-[3em] py-7"><Image src={Images.Perfume} alt="" className=""/></div>
                <div className="absolute bottom-8 flex flex-col gap-2 left-8">
                  <h1 className="text-white font-semibold text-2xl">Perfume</h1>
                  <h1 className="text-white w-[15em]">GUCCI INTENSE OUD EDP</h1>
                  <u className="text-white"><Link href='/' className="font-semibold">Shop Now</Link></u>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-[4em] py-[4em] gap-[6em] items-center justify-center sm:flex-col md:flex-col lg:flex-row'>
          {[
            {
              image: Images.Service1,
              title: `FREE AND FAST DELIVERY`,
              subtext: `Free delivery for all orders over $140`
            },
            {
              image: Images.Service2,
              title: `24/7 CUSTOMER SERVICE`,
              subtext: `Friendly 24/7 customer support`,
            },
            {
              image: Images.Service3,
              title: `MONEY BACK GUARANTEE`,
              subtext: `We return money within 30 days`
            },
          ].map((services, i) => (
            <div className='flex flex-col gap-4 items-center' key={i}>
                <div><Image src={services.image} alt=''/></div>
                <div className='font-bold text-[1.2em]'>{services.title}</div>
                <div>{services.subtext}</div>
            </div>
          ))}
        </div>
      <Footer/>
      <hr className="text-gray-600"/>
      <Foot/>
    </div>
  );
}
