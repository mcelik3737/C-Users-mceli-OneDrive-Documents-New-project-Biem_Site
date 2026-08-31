import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";
import { base44 } from "@/api/base44Client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, ArrowLeft, User, Shield, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function AccountSettings() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      await base44.auth.deleteAccount();
      toast({ title: "Hesap Silindi", description: "Hesabınız başarıyla kapatıldı." });
      logout(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (error) {
      toast({
        title: "Hata",
        description: "Hesap silinirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      });
    }
    setDeleting(false);
    setDialogOpen(false);
  };

  return (
    <>
      <SEOHead
        title="Hesap Ayarları"
        description="BİEM Teknoloji Elektronik hesap ayarları - profil bilgileri ve hesap yönetimi."
        canonical="/hesap-ayarlari"
        noindex
      />
      <div className="min-h-screen bg-background py-12 lg:py-20 px-4">
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 select-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri
          </button>

          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Hesap Ayarları</h1>

          {/* Profile Card */}
          <div className="rounded-xl border border-border/50 bg-card/50 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{user?.full_name || "Kullanıcı"}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
                {user?.role && (
                  <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                    <Shield className="w-3 h-3" />
                    {user.role === "admin" ? "Yönetici" : "Kullanıcı"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
            <h3 className="text-sm font-semibold text-destructive mb-2 flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Hesabı Sil
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Hesabınızı silmek geri alınamaz. Tüm verileriniz kalıcı olarak silinecektir. Bu işlem öncesinde önemli bilgilerinizi yedeklemenizi öneririz.
            </p>
            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  className="select-none"
                >
                  Hesabımı Sil
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Hesabınızı silmek istediğinize emin misiniz?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Bu işlem geri alınamaz. Hesabınıza ait tüm veriler kalıcı olarak silinecektir.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="select-none">İptal</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteAccount}
                    disabled={deleting}
                    className="bg-destructive hover:bg-destructive/90 select-none"
                  >
                    {deleting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Siliniyor...
                      </>
                    ) : (
                      "Evet, Hesabımı Sil"
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </>
  );
}
