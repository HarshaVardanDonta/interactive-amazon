import "../index.css"
import logo from '../assets/logo.png';
import { GrLocation } from 'react-icons/gr';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import TextButton from './text';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsGlobe} from 'react-icons/bs';
import {BsCart2} from 'react-icons/bs';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import Drawer from '@mui/material/Drawer';
import {MdAccountCircle} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import DrawerButton from './drawerbutton';



export default function Header(){
    const [open, setOpen] = useState(false);
    return(
        <div>
            <div className="Header">
                <nav>
                    <Link to="/"><img src={logo} alt=" "/></Link>
                </nav>
                
                <div className="HeaderLocation">
                    <GrLocation className="LocationIcon"/>
                    <div className="HeaderLocationText">
                        <div className="HeaderLocationText1">user</div>
                        <div className="HeaderLocationText2">location 000-000</div>
                    </div>
                </div>
                <div className="SearchBar">
                    <div className="LeftDrop">
                        All<MdOutlineArrowDropDown/>
                    </div>
                    <div className="SearchIconContainer">

                    </div>
                </div>
                <div className="Advt">
                    Upto 30% off | Laptops
                </div>
                
            </div>
            <div className="Header2">
                 <div className="Dummy"/>
                 {/* drawer */}
                 <button onClick={() => setOpen(true)} className="Button">
                    <TextButton Leading=<GiHamburgerMenu/> Text=" Departments"/>
                 </button>
                 <Drawer open={open} onClose={!open} className="Drawer"
                 PaperProps={{
            sx: { width: "25%" },
          }}
                 >
                    <div className="DrawerHeader">
                        <div className="Center">
                            <MdAccountCircle className="DrawerIcon"/>&nbsp; Hello, User
                        </div>
                        <button onClick={()=>setOpen(false)} className="Button">
                            <AiOutlineClose className="DrawerIcon"/>
                        </button>
                    </div>
                    <div className="DrawerLeadText">
                        Shop By Department
                    </div>
                    <DrawerButton text="Computers & peripherals"/>
                    <DrawerButton text="Mobile & Accessories"/>
                    <DrawerButton text="TVs & Electronics"/>
                    <DrawerButton text="Office & Kitchen Appliances"/>
                    <DrawerButton text="Office Products & Stationary"/>
                    <DrawerButton text="Office Breakroom Supplies"/>
                    <DrawerButton text="Furniture, Decore & Furnishing"/>
                    <DrawerButton text="Cleaning & Sanitation"/>
                    <DrawerButton text="Tools & Instruments"/>
                    <DrawerButton text="Security & Safety Products"/>
                    <DrawerButton text="Kitchenette & Dining"/>
                    <DrawerButton text="Hardware & Electronics"/>
                    <DrawerButton text="Books & Sports"/>
                    <DrawerButton text="Automotive"/>
                    <DrawerButton text="Health & Personal Care"/>
                    
                 </Drawer>
                <TextButton Text="Get the App" Trailing=<MdOutlineArrowDropDown/>/>
                <TextButton Text="Buy Again"/>
                <TextButton Text="Today's Deal"/>
                <TextButton Text="Add Item"/>
                <TextButton Text="Business Deals"/>
                <TextButton Text="Quantity Discount"/>
                <TextButton Text="Savings Hub"/>
                <TextButton Text="Recommendations" Trailing=<MdOutlineArrowDropDown/>/>
                <TextButton Text="Customer Service"/>
                <div className="Space"/>
                <div className="Header2LanguageSelector">
                    En
                    <div className="Header2LanguageSelector2">
                    <BsGlobe/><MdOutlineArrowDropDown/>
                    </div>
                </div>
                <div className="Header2User">
                    User
                    <div className="Header2User2">
                    Address ...<MdOutlineArrowDropDown/>
                    </div>
                </div>
                <TextButton Text="Lists" Trailing=<MdOutlineArrowDropDown/>/>
                <TextButton Text="Join Prime" Trailing=<MdOutlineArrowDropDown/>/>
                <nav><Link to="cart">
                    <TextButton Trailing=<BsCart2/>/>
                </Link></nav>
                
                <div className="Dummy"/>
            </div>
            <Outlet/>
        </div>
    );
}
