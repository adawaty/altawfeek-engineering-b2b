import { useLanguage } from "@/contexts/LanguageContext";
import type { Product } from "@/lib/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X, Check, Minus } from "lucide-react";

interface CompareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

export default function CompareDialog({ isOpen, onClose, products }: CompareDialogProps) {
  const { t, language } = useLanguage();

  if (products.length === 0) return null;

  // Extract all unique spec keys from all selected products
  const allSpecKeys = Array.from(new Set(
    products.flatMap(p => p.specs[language].map(s => s.key))
  ));

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 gap-0 overflow-hidden bg-white">
        <DialogHeader className="p-6 border-b bg-secondary/10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-primary">{t.comparison.tech_specs}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <DialogDescription>
            {t.comparison.compare}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-auto p-6">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-primary/10">
                <TableHead className="w-[200px] bg-secondary/5 font-bold text-primary text-lg">
                  {language === 'en' ? 'Feature' : 'المواصفات'}
                </TableHead>
                {products.map(product => (
                  <TableHead key={product.id} className="min-w-[200px] align-top pb-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-24 w-24 bg-white rounded-lg border p-2 flex items-center justify-center">
                        <img src={product.image} alt={product.brand} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-bold text-muted-foreground uppercase">{product.brand}</div>
                        <div className="text-sm font-bold text-primary line-clamp-2 h-10">{product.title[language]}</div>
                      </div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Product Category Row */}
              <TableRow>
                <TableCell className="font-bold bg-secondary/5">{language === 'en' ? 'Category' : 'الفئة'}</TableCell>
                {products.map(product => (
                  <TableCell key={product.id} className="text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {product.category}
                    </span>
                  </TableCell>
                ))}
              </TableRow>

              {/* Dynamic Specs Rows */}
              {allSpecKeys.map(key => (
                <TableRow key={key} className="hover:bg-secondary/5 transition-colors">
                  <TableCell className="font-medium bg-secondary/5 text-muted-foreground">{key}</TableCell>
                  {products.map(product => {
                    const spec = product.specs[language].find(s => s.key === key);
                    return (
                      <TableCell key={product.id} className="text-center font-bold text-foreground">
                        {spec ? spec.value : <Minus className="h-4 w-4 mx-auto text-muted-foreground/30" />}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="p-4 border-t bg-secondary/5 text-center text-xs text-muted-foreground">
           {language === 'en' 
             ? "* Specifications are subject to change without notice. Please contact us for detailed datasheets." 
             : "* المواصفات عرضة للتغيير دون إشعار. يرجى الاتصال بنا للحصول على أوراق البيانات التفصيلية."}
        </div>
      </DialogContent>
    </Dialog>
  );
}
