import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
"https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://img.freepik.com/free-photo/modern-elegance-black-leather-sports-shoes-shine-generated-by-ai_188544-40639.jpg";
const img3="https://images-na.ssl-images-amazon.com/images/I/51sus6a8D+L._SX240_QL100_AC_SCLZZZZZZZ_.jpg";
const img4="https://m.media-amazon.com/images/I/61VTJZdjWfL._UX522_.jpg";
const img5="https://m.media-amazon.com/images/I/71iHzrTRX5L._SX355_.jpg";
const img6="https://m.media-amazon.com/images/I/41FMFgJ0LmL._SY300_SX300_QL70_FMwebp_.jpg";
const img7="https://m.media-amazon.com/images/I/419s7aoNgDL._SX300_SY300_QL70_FMwebp_.jpg";
const img8="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SY355_.jpg";
const img9="https://m.media-amazon.com/images/I/61zroMjd9FL._SY355_.jpg";
const img10="https://m.media-amazon.com/images/I/51VZi8qHcXL._SY450_.jpg";
const img11="https://m.media-amazon.com/images/I/31B3Efni-dL._SX300_SY300_QL70_FMwebp_.jpg";
const img12="https://m.media-amazon.com/images/I/61MuPwDgl6L._SX355_.jpg";
const img13="https://m.media-amazon.com/images/I/41afFfWVSqL._SX300_SY300_QL70_FMwebp_.jpg";
const img14="https://m.media-amazon.com/images/I/71HfOBSJJKL._SY355_.jpg";
const img15="https://m.media-amazon.com/images/I/51AYPh7DHGL._SY445_SX342_QL70_FMwebp_.jpg";
const img16="https://m.media-amazon.com/images/I/813LbET4BJL._SY355_.jpg";
const img17="https://m.media-amazon.com/images/I/41Qd-RH1TTL._SY445_SX342_QL70_FMwebp_.jpg";
const img18="https://m.media-amazon.com/images/I/61hVdUVkuOL._SY355_.jpg";
const img19="https://images-na.ssl-images-amazon.com/images/I/31lWplljPgL._SX300_SY300_QL70_FMwebp_.jpg";
const img20="https://m.media-amazon.com/images/I/41LjQpjgG9L._AC_SR320,320_.jpg";


const Home = () => {
  const productList=[
    {
      name:"Mac Book",
      price:12000,
      imgSrc:img1,
      id:"fnjdsnosdjksj",
    },
    {
      name:"Black Shoes",
      price:490,
      imgSrc:img2,
      id:"fnjdsnodkdnssdjksj",
    },
    {
      name:"TECNO Camon 20 Pro 5G",
      price:19990,
      imgSrc:img3,
      id:"fnjdsnodkdnssdjkdkksj",
    },
    {
      name:"Vibez by Lifelong Trooper",
      price:1999,
      imgSrc:img4,
      id:"fnjdsnodkdnssassdjkd22kksj",
    },
    {
      name:"OREST Watch Repair KitVibez by Lifelong Trooper",
      price:3429,
      imgSrc:img5,
      id:"fnjdrfowerinsnodkdnssassdjkdkksj",
    },
    {
      name:"Renata Watch Battery 395 (Package of 2)",
      price:700,
      imgSrc:img6,
      id:"fnjdsnodkdnssassdjkderghetkksj",
    },
    {
      name:"Logitech MK215 Wireless Keyboard and Mouse Combo",
      price:1345,
      imgSrc:img7,
      id:"fnjdsnodkdnssassdjmmckwdkdkksj",
    },
    {
      name:"STRIFF Adjustable Laptop Tabletop Stand ",
      price:329,
      imgSrc:img8,
      id:"fnjdsnodkdnssassdj87987kdkksj",
    }, {
      name:"TRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad,",
      price:99,
      imgSrc:img9,
      id:"fnjdsnodkdnssassdjd3bi3jkdkksj",
    }, {
      name:"STRIFF Multi Angle Tablet/Mobile Stand",
      price:79,
      imgSrc:img10,
      id:"fnjdsnodkdnssass2342ni2ndjkdkksj",
    }, {
      name:"Portronics Modesk 100 Desktop Foldable Mobile & Tablet Holder with Multiple Viewing Angles",
      price:149,
      imgSrc:img11,
      id:"fnjdsnodkdnssassdjk098nnguydkksj",
    }, {
      name:"Marshall Acton III Bluetooth Home Speaker, Black",
      price:31999,
      imgSrc:img12,
      id:"fnjdsnodkdnssassdj132123gthrhdfvkdkksj",
    }, {
      name:"AmazonBasics 3.5mm to 2-Male RCA Adapter cable - 4 feet",
      price:529,
      imgSrc:img13,
      id:"fnjdsnodkdnssassdjkd34tv5654yv54ykksj",
    }, {
      name:"AmazonBasics Digital Optical Coax to Analog RCA Audio Converter Adapter with Fiber Cable",
      price:799,
      imgSrc:img14,
      id:"fnjdsnodkdnssassd45vy64ubv6htgfjkdkksj",
    }, {
      name:"Cezo Digital to Analog Audio Converter SPDIF Optical/Fiber Coaxial Coax",
      price:849,
      imgSrc:img15,
      id:"fnjdsnodkdnssassdjv45yechgrdfkdkksj",
    }, {
      name:"Tukzer Multi-Purpose Microfiber Cloths",
      price:299,
      imgSrc:img16,
      id:"fnjdsnodkdnssassdjkv45y46buejvyrhdkksj",
    }, {
      name:"NEEKHIL Portable Washing Machine,Mini Washing Machine for Baby Clothes",
      price:2888,
      imgSrc:img17,
      id:"fnjdsnodkdnssassdjkv54yehtrgdkksj",
    }, {
      name:"VAGARO Supreme High Pressure Washer",
      price:4444,
      imgSrc:img18,
      id:"fnjdsnodkdnssassdjk6vrytujbjtukbjyfhvbgddkksj",
    }, {
      name:"Vacuum Cleaner with 20 kPa Power Suction, Low Sound, High Energy Efficiency ",
      price:4399,
      imgSrc:img19,
      id:"fnjdsnodkdnssassdjk7tiubjyhbgfdkksj",
    }, {
      name:"Inalsa Vacuum Cleaner Wet and Dry 1400 W & 20 LTR Capacity Strong Suction",
      price:4295,
      imgSrc:img20,
      id:"fnjdsnodkdnssassdjk57yhtvrgfbvvetrhdkksj",
    },

  ];

  const dispatch=useDispatch()

  const addToCartHandler=(options)=>{
    dispatch({type:"addToCart",payload:options});
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart");
  };
  return (
    <div className='home'>
      {
        productList.map(i=>(
          <ProductCart key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler} />
        ))
      }
    </div>
  )
}

const ProductCart=({name,id,price,handler,imgSrc})=>(
  <div className='productCart'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
  </div>
)

export default Home
