import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/lib/products";
import type { ProductBrand, ProductCategory } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Search, Filter, Phone, Plus, ArrowRightLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import CompareFloatingBar from "@/components/CompareFloatingBar";
import CompareDialog from "@/components/CompareDialog";

export default function ProductCatalog() {
  const { language, t, dir } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState<ProductBrand | "All">("All");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Comparison State
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const brands: ProductBrand[] = ["Bavaria", "Apollo", "SRI"];
  const categories: ProductCategory[] = ["Extinguishers", "Alarms", "Systems", "Hoses"];

  const filteredProducts = products.filter((product) => {
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesCategory && matchesSearch;
  });

  // Comparison Handlers
  const toggleProductSelection = (productId: string) => {
    setSelectedProductIds(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        if (prev.length >= 4) return prev; // Limit to 4
        return [...prev, productId];
      }
    });
  };

  const clearSelection = () => setSelectedProductIds([]);
  
  const selectedProductsList = products.filter(p => selectedProductIds.includes(p.id));

  return (
    <section className="bg-secondary/10 py-12 min-h-screen relative">
      <div className="container mx-auto px-4">
        
        {/* Top Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-border/50">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search */}
            <div className="relative w-full lg:w-1/3">
              <Search className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4", dir === 'rtl' ? 'right-3' : 'left-3')} />
              <Input 
                placeholder={language === 'en' ? "Search products..." : "بحث عن المنتجات..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn("bg-secondary/20", dir === 'rtl' ? 'pr-10' : 'pl-10')}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-end w-full lg:w-2/3">
              <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                <Filter className="h-4 w-4" /> {language === 'en' ? 'Filters:' : 'تصفية:'}
              </span>
              
              {/* Brand Filter */}
              <div className="flex bg-secondary/30 p-1 rounded-lg">
                <button
                  onClick={() => setSelectedBrand("All")}
                  className={cn("px-3 py-1 text-sm rounded-md transition-all", selectedBrand === "All" ? "bg-white shadow text-primary font-bold" : "text-muted-foreground hover:text-primary")}
                >
                  {language === 'en' ? 'All Brands' : 'كل العلامات'}
                </button>
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={cn("px-3 py-1 text-sm rounded-md transition-all", selectedBrand === brand ? "bg-white shadow text-primary font-bold" : "text-muted-foreground hover:text-primary")}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              {/* Category Filter - Simple Select Style for Mobile, Buttons for Desktop */}
              <div className="hidden md:flex bg-secondary/30 p-1 rounded-lg">
                 <button
                  onClick={() => setSelectedCategory("All")}
                  className={cn("px-3 py-1 text-sm rounded-md transition-all", selectedCategory === "All" ? "bg-white shadow text-primary font-bold" : "text-muted-foreground hover:text-primary")}
                >
                  {language === 'en' ? 'All' : 'الكل'}
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn("px-3 py-1 text-sm rounded-md transition-all", selectedCategory === cat ? "bg-white shadow text-primary font-bold" : "text-muted-foreground hover:text-primary")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredProducts.map((product) => {
            const isSelected = selectedProductIds.includes(product.id);
            return (
              <Card key={product.id} className={cn("group border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex flex-col h-full ring-2 ring-transparent", isSelected ? "ring-primary shadow-lg scale-[1.02]" : "")}>
                
                {/* Image Container */}
                <div className="relative p-8 bg-white h-64 flex items-center justify-center border-b border-secondary/20">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="secondary" className="font-bold text-xs uppercase tracking-wider bg-secondary/50 text-primary border-none">
                      {product.brand}
                    </Badge>
                  </div>
                  
                  {/* Compare Checkbox */}
                  <div className={cn("absolute top-4 right-4 z-10 transition-all duration-300", isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>
                    <button 
                      onClick={() => toggleProductSelection(product.id)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm",
                        isSelected 
                          ? "bg-primary text-white" 
                          : "bg-white text-muted-foreground hover:text-primary border border-border"
                      )}
                    >
                      {isSelected ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                      {isSelected ? t.comparison.remove : t.comparison.add}
                    </button>
                  </div>

                  <img 
                    src={product.image} 
                    alt={product.title[language]} 
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <CardContent className="flex-grow flex flex-col p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 leading-tight h-12">
                      {product.title[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 h-16">
                      {product.desc[language]}
                    </p>
                  </div>

                  {/* Specs Table */}
                  <div className="bg-secondary/20 rounded-lg p-3 mb-6 text-xs flex-grow">
                    {product.specs[language].slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex justify-between py-1 border-b border-white/50 last:border-0">
                        <span className="text-muted-foreground font-medium">{spec.key}:</span>
                        <span className="text-primary font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-accent text-white group-hover:shadow-lg transition-all" asChild>
                      <a 
                        href={`https://wa.me/201005751057?text=${encodeURIComponent(
                          language === 'en' 
                            ? `Hi, I am interested in checking availability and price for: ${product.title.en} (${product.brand})`
                            : `مرحبًا، أود الاستفسار عن السعر والتوفر للمنتج: ${product.title.ar} (${product.brand})`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Inquire via WhatsApp' : 'استفسار واتساب'}
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className={cn("px-3 border-primary/20 hover:border-primary hover:bg-primary/5", isSelected ? "bg-primary/10 text-primary border-primary" : "text-muted-foreground")}
                      onClick={() => toggleProductSelection(product.id)}
                    >
                      <ArrowRightLeft className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <Filter className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg">{language === 'en' ? 'No products found matching your criteria.' : 'لم يتم العثور على منتجات تطابق بحثك.'}</p>
            <Button 
              variant="link" 
              onClick={() => { setSelectedBrand("All"); setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-2"
            >
              {language === 'en' ? 'Clear Filters' : 'إلغاء التصفية'}
            </Button>
          </div>
        )}

      </div>

      {/* Comparison UI */}
      <CompareFloatingBar 
        selectedProducts={selectedProductsList}
        onRemove={toggleProductSelection}
        onClear={clearSelection}
        onCompare={() => setIsCompareOpen(true)}
      />
      
      <CompareDialog 
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        products={selectedProductsList}
      />
    </section>
  );
}
