"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroFlavorStage } from "@/components/HeroFlavorStage";
import { SensoryProfile } from "@/components/SensoryProfile";
import { CraftProcess } from "@/components/CraftProcess";
import { PackBuilder } from "@/components/PackBuilder";
import { Testimonials } from "@/components/Testimonials";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { Flavor, CartItem } from "@/types";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddSingleFlavor = (flavor: Flavor) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.flavorId === flavor.id && item.packType === "single-case"
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        {
          flavorId: flavor.id,
          flavorName: flavor.name,
          packType: "single-case",
          quantity: 1,
          price: flavor.price,
        },
      ]);
    }

    showToast(`Added 12-Can Case of ${flavor.name} to crate`);
    setIsCartOpen(true);
  };

  const handleAddCustomCrate = (selectedCans: Flavor[]) => {
    const cansList = selectedCans.map((c) => c.name.split(" & ")[0]);
    setCartItems([
      ...cartItems,
      {
        flavorId: "custom-flight-" + Date.now(),
        flavorName: "Custom 4-Can Flight",
        packType: "custom-crate",
        quantity: 1,
        price: 18,
        cans: cansList,
      },
    ]);

    showToast("Added Custom 4-Can Flight to crate");
    setIsCartOpen(true);
  };

  const handleUpdateQty = (index: number, delta: number) => {
    const updated = [...cartItems];
    updated[index].quantity += delta;
    if (updated[index].quantity <= 0) {
      updated.splice(index, 1);
    }
    setCartItems(updated);
  };

  const handleRemoveItem = (index: number) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F2] text-[#222926]">
      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#13221C] text-[#F3E97A] font-semibold text-xs shadow-2xl border border-[#F3E97A]/20 transition-all flex items-center gap-2">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Interactive Hero Stage */}
        <HeroFlavorStage onAddToCart={handleAddSingleFlavor} />

        {/* Sensory Profile & Aromatics Matrix */}
        <SensoryProfile onAddToCart={handleAddSingleFlavor} />

        {/* Real Whole-Botanical Extraction Craft */}
        <CraftProcess />

        {/* Custom 4-Can Flight Mixer */}
        <PackBuilder onAddCustomCrate={handleAddCustomCrate} />

        {/* Sommelier & Culinary Reviews */}
        <Testimonials />
      </main>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
