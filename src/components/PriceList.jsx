import backgroundImage from '../../public/images/background1.jpg';
import { useState, useEffect } from 'react';
import cakeData from '../data/cakeData';
import PriceEstimate from './PriceEstimate';

export default function PriceList() {
  return (
    <div>
      <div
        className="container relative mx-auto max-w-screen-md mt-7 p-4 
                bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          boxShadow: 'inset 0 0 25px 12px #FDEFF6',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />

        <div className="relative z-10 font-main-font">
          <h2 className="heading-text">Price List</h2>
          <div className="flex flex-col md:flex-row gap-5 flex-wrap justify-center">
            <div className="flex flex-col">
              <h3 className="text-xl text-center">Short Cakes</h3>
              <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[253px]">
                <li className="mb-10">5" Double Layer - £55</li>
                <li className="mb-10">6" Double Layer - £75</li>
                <li className="mb-10">8" Double Layer - £90</li>
                <li className="mb-2">10" Double Layer - £100</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-center">Tall Cakes</h3>
              <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[253px]">
                <li className="mb-10">5" Triple Layer - £75</li>
                <li className="mb-10">6" Triple Layer - £90</li>
                <li className="mb-10">8" Triple Layer - £120</li>
                <li className="mb-2">10" Triple Layer - £150</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-center">Tiered Cakes</h3>
              <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[253px]">
                <li className="mb-10">Two Tier (6" + 5") - £150</li>
                <li className="mb-10">Two Tier (8" + 6") - £200</li>
                <li className="mb-10">Three Tier (8", 6", 4") - £250</li>
                <li className="mb-2">Three Tier (10", 8", 6") - £320</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-center">Treats</h3>
              <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[253px]">
                <li className="mb-10">Box of 12 Cupcakes - £30</li>
                <li className="mb-10">Box of 24 Cupcakes - £50</li>

                <li className="mb-11">9" Square Tray Bakes - £25</li>

                <li className="mb-11">Box of 4 Jar Cakes - £25</li>
                <li className="mb-11">Box of 20 Jar Cakes - £100</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-center">Fruit Cakes</h3>
              <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[270px]">
                <li className="mb-11">8" Round (20cm) - £45</li>
                <li className="mb-11">10" Round (25cm) - £60</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl text-center">Heart Cakes</h3>
              <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[253px]">
                <li className="mb-10">6" Heart Double Layer - £60</li>
                <li className="mb-10">8" Heart Double Layer - £75</li>
                <li className="mb-10">8" Heart Triple Layer - £90</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
