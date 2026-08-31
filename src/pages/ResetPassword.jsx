import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Loader2, AlertTriangle } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import SEOHead from "@/components/SEOHead";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPassword) {
      setError("Şifreler eşleşmiyor");
      return;
    }
    setLoading(true);
    try {
      await base44.auth.resetPassword({ resetToken, newPassword });
      window.location.href = "/login";
    } catch (err) {
      setError(err.message || "Şifre sıfırlanamadı");
    } finally {
      setLoading(false);
    }
  };

  if (!resetToken) {
    return (
      <>
      <SEOHead title="Geçersiz Bağlantı" description="Şifre sıfırlama bağlantısı geçersiz." canonical="/reset-password" noindex />
      <AuthLayout
        icon={AlertTriangle}
        title="Geçersiz Sıfırlama Bağlantısı"
        subtitle="Bu şifre sıfırlama bağlantısı eksik veya geçersiz"
        footer={
          <Link to="/forgot-password" className="text-primary font-medium hover:underline">
            Yeni bağlantı isteyin
          </Link>
        }
      >
        <p className="text-sm text-foreground text-center">
          Kullandığınız bağlantı eksik görünüyor. Lütfen yeni bir şifre sıfırlama e-postası isteyin.
        </p>
      </AuthLayout>
      </>
    );
  }

  return (
    <>
    <SEOHead title="Şifreyi Sıfırla" description="Yeni şifrenizi belirleyin." canonical="/reset-password" noindex />
    <AuthLayout
      icon={Lock}
      title="Yeni Şifre"
      subtitle="Yeni şifrenizi aşağıya girin"
    >
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">Yeni Şifre</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              autoFocus
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Şifreyi Onaylayın</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="confirm"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full h-12 font-medium" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sıfırlanıyor...
            </>
          ) : (
            "Şifreyi Sıfırla"
          )}
        </Button>
      </form>
    </AuthLayout>
    </>
  );
}
