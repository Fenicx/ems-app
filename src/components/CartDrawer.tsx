"use client";

import React, { useState } from "react";
import { CartItem } from "@/types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? rawSubtotal * 0.15 : 0;
  const subtotal = rawSubtotal - discount;
  const freeShippingThreshold = 50;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shipping = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 8;
  const total = subtotal + shipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "BOTANICAL" || promoCode.trim().toUpperCase() === "FIRSTSIP") {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F5F7F2] shadow-2xl flex flex-col justify-between border-l border-[#13221C]/15">
          {/* Header */}
          <div className="p-6 border-b border-[#13221C]/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#13221C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h2 className="font-display font-bold text-lg text-[#13221C]">
                Your Harvest Crate
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-[#5B6A62] text-sm"
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3 bg-[#ECEFE8] border-b border-[#13221C]/10 text-xs">
            {neededForFreeShipping > 0 ? (
              <div className="text-[#3B4941]">
                Add <span className="font-bold text-[#13221C]">${neededForFreeShipping.toFixed(2)}</span> more to unlock <span className="font-bold">Free Cold-Pack Shipping</span>!
                <div className="w-full h-1.5 bg-[#D2DBD0] rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-[#13221C] rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="text-emerald-800 font-bold flex items-center gap-1.5">
                <span>✓</span> You unlocked Free Cold-Pack Shipping!
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderConfirmed ? (
              <div className="text-center py-16 px-4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-[#13221C]">
                  Harvest Reserved!
                </h3>
                <p className="text-xs text-[#526058] mt-2 max-w-xs">
                  Your batch will be cold-packed and dispatched directly from our botanical facility. Order #POMO-8492
                </p>
                <button
                  onClick={() => {
                    setOrderConfirmed(false);
                    onClose();
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#13221C] text-[#F5F7F2] text-xs font-semibold"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center text-[#738279]">
                <svg
                  className="w-12 h-12 text-[#A8B7AF] mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <div className="font-display font-bold text-lg text-[#13221C]">
                  Your crate is empty
                </div>
                <p className="text-xs text-[#738279] mt-1 max-w-xs">
                  Explore our cold-extracted harvest batches or build a custom 4-flavor tasting box.
                </p>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.flavorId}-${idx}`}
                  className="p-4 rounded-2xl bg-white border border-[#13221C]/10 shadow-sm flex items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="font-display font-bold text-sm text-[#13221C]">
                      {item.flavorName}
                    </div>
                    <div className="text-[11px] text-[#697870]">
                      {item.packType === "custom-crate"
                        ? "Custom 4-Can Flight"
                        : "12-Can Harvest Case"}
                    </div>
                    {item.cans && (
                      <div className="text-[10px] text-[#85948C] mt-1 flex flex-wrap gap-1">
                        {item.cans.map((c, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 rounded bg-[#F5F7F2] border border-black/5"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="font-bold text-xs text-[#13221C] mt-2">
                      ${item.price} each
                    </div>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-[11px] text-[#C2410C] hover:underline"
                    >
                      Remove
                    </button>
                    <div className="flex items-center border border-[#13221C]/15 rounded-lg overflow-hidden bg-[#F5F7F2]">
                      <button
                        onClick={() => onUpdateQty(idx, -1)}
                        className="px-2.5 py-1 hover:bg-black/5 text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-[#13221C]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(idx, 1)}
                        className="px-2.5 py-1 hover:bg-black/5 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#13221C]/10 space-y-4">
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo (try FIRSTSIP)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#13221C]/15 focus:outline-none focus:border-[#13221C]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#13221C] text-white rounded-xl text-xs font-semibold hover:bg-[#2F443A]"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <div className="text-[11px] text-emerald-700 font-semibold flex items-center justify-between">
                  <span>Promo FIRSTSIP (-15%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              {/* Subtotal breakdown */}
              <div className="space-y-1.5 text-xs text-[#526058]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#13221C]">
                    ${rawSubtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cold-Insulated Shipping</span>
                  <span className="font-semibold text-[#13221C]">
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#13221C]/10 text-sm font-bold text-[#13221C]">
                  <span>Total</span>
                  <span className="font-display text-lg">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 rounded-2xl bg-[#13221C] text-[#F3E97A] font-display font-bold text-sm hover:bg-[#283C32] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {isCheckingOut ? (
                  <span>Securing Harvest Batch...</span>
                ) : (
                  <>
                    <span>Proceed to Cold-Pack Checkout</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
