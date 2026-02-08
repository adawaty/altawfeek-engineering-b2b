import { useLanguage } from "@/contexts/LanguageContext";
import type { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { X, ArrowRightLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompareFloatingBarProps {
  selectedProducts: Product[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onCompare: () => void;
}

export default function CompareFloatingBar({ selectedProducts, onRemove, onClear, onCompare }: CompareFloatingBarProps) {
  const { t, dir } = useLanguage();

  if (selectedProducts.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-10">
      <div className="container mx-auto max-w-4xl bg-primary text-white rounded-xl shadow-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
        
        {/* Selected Items List */}
        <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <span className="text-sm font-bold whitespace-nowrap hidden md:inline-block opacity-80">{t.comparison.compare}:</span>
          {selectedProducts.map((product) => (
            <div key={product.id} className="relative group flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.brand} 
                className="w-12 h-12 object-contain bg-white rounded-md p-1 border border-white/20"
              />
              <button 
                onClick={() => onRemove(product.id)}
                className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-0.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          {selectedProducts.length < 2 && (
             <div className="text-xs text-white/50 italic whitespace-nowrap px-2">
               {selectedProducts.length === 1 ? (dir === 'rtl' ? 'اختر منتج آخر' : 'Select another to compare') : ''}
             </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClear}
            className="text-white/70 hover:text-white hover:bg-white/10 whitespace-nowrap"
          >
            {t.comparison.clear}
          </Button>
          <Button 
            onClick={onCompare}
            disabled={selectedProducts.length < 2}
            className={cn("gap-2 font-bold whitespace-nowrap", selectedProducts.length >= 2 ? "bg-accent hover:bg-accent/90 text-white" : "bg-white/20 text-white/50 cursor-not-allowed")}
          >
            <ArrowRightLeft className="h-4 w-4" />
            {t.comparison.compare} ({selectedProducts.length})
          </Button>
        </div>
      </div>
    </div>
  );
}
