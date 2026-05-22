import { useState } from "react";

const Icon = {
  User: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
    </svg>
  ),
  Lock: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>
    </svg>
  ),
  Image: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="m21 15-5-5L5 21"/>
    </svg>
  ),
  Trash: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
    </svg>
  ),
  Cog: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ),
  Bars: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  ),
  Eye: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  EyeOff: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <path d="m1 1 22 22"/>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="m5 12 5 5L20 7"/>
    </svg>
  ),
  Upload: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  ),
  Bell: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  Moon: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Globe: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Shield: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
};

const styles = {
  label: { display: "block", fontSize: 13, fontWeight: 500, color: "#6b7280", marginBottom: 6, letterSpacing: "0.02em" },
  input: {
    width: "100%", boxSizing: "border-box", padding: "10px 14px",
    border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 15,
    background: "#f9fafb", outline: "none", transition: "border 0.2s, box-shadow 0.2s",
    color: "#111827",
  },
  btn: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "10px 20px", borderRadius: 10, border: "none",
    fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
  },
  primaryBtn: { background: "#f97316", color: "#fff" },
  dangerBtn: { background: "#ef4444", color: "#fff" },
  ghostBtn: { background: "#f3f4f6", color: "#374151", border: "1px solid #e5e7eb" },
  card: {
    background: "#fff", borderRadius: 16, border: "1px solid #f3f4f6",
    padding: "24px 28px", marginBottom: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 4 },
  sectionSub: { fontSize: 13, color: "#9ca3af", marginBottom: 24 },
  divider: { border: "none", borderTop: "1px solid #f3f4f6", margin: "20px 0" },
};

function Input({ label, type = "text", placeholder, value, onChange, icon, hint }) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPass = type === "password";
  return (
    <div style={{ marginBottom: 18 }}>
      {label && <label style={styles.label}>{label}</label>}
      <div style={{ position: "relative" }}>
        {icon && (
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: focused ? "#f97316" : "#9ca3af", transition: "color 0.2s" }}>
            {icon}
          </span>
        )}
        <input
          type={isPass && show ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...styles.input,
            paddingLeft: icon ? 42 : 14,
            paddingRight: isPass ? 42 : 14,
            borderColor: focused ? "#f97316" : "#e5e7eb",
            boxShadow: focused ? "0 0 0 3px rgba(249,115,22,0.12)" : "none",
            background: focused ? "#fff" : "#f9fafb",
          }}
        />
        {isPass && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: 0 }}
          >
            {show ? <Icon.EyeOff /> : <Icon.Eye />}
          </button>
        )}
      </div>
      {hint && <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 5 }}>{hint}</p>}
    </div>
  );
}

function Toast({ msg, type = "success" }) {
  const colors = { success: ["#ecfdf5", "#059669"], error: ["#fef2f2", "#dc2626"] };
  const [bg, fg] = colors[type] || colors.success;
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, background: bg, color: fg, border: `1px solid ${fg}33`, borderRadius: 12, padding: "12px 20px", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.1)", animation: "slideIn 0.3s ease" }}>
      <Icon.Check /> {msg}
    </div>
  );
}

function useToast() {
  const [toast, setToast] = useState(null);
  const show = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };
  return [toast, show];
}


function Profile() {
  const [form, setForm] = useState({ name: "Alex Rivera", username: "alex.rivera", bio: "Product designer & frontend developer based in NYC.", phone: "+1 (555) 012-3456" });
  const [toast, show] = useToast();
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div>
      {toast && <Toast {...toast} />}
      <p style={styles.sectionTitle}>Profile Information</p>
      <p style={styles.sectionSub}>Update your personal details here.</p>

      {/* Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28, padding: "20px 24px", background: "#fff7ed", borderRadius: 14, border: "1px solid #fed7aa" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#f97316,#ea580c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, color: "#fff", flexShrink: 0 }}>
          AR
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 17, margin: 0, color: "#111827" }}>Alex Rivera</p>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: "3px 0 12px" }}>@alex.rivera</p>
          <button style={{ ...styles.btn, ...styles.ghostBtn, fontSize: 13, padding: "7px 14px" }}>
            <Icon.Upload /> Change photo
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
        <Input label="Full name" value={form.name} onChange={set("name")} icon={<Icon.User />} />
        <Input label="Username" value={form.username} onChange={set("username")} />
      </div>
      <Input label="Phone" value={form.phone} onChange={set("phone")} />
      <div style={{ marginBottom: 18 }}>
        <label style={styles.label}>Bio</label>
        <textarea
          rows={3}
          value={form.bio}
          onChange={set("bio")}
          style={{ ...styles.input, resize: "vertical", paddingTop: 10 }}
        />
      </div>

      <button onClick={() => show("Profile updated!")} style={{ ...styles.btn, ...styles.primaryBtn }}>
        Save changes
      </button>
    </div>
  );
}

function ChangeEmail() {
  const [form, setForm] = useState({ current: "alex@example.com", newEmail: "", confirm: "" });
  const [toast, show] = useToast();
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSave = () => {
    if (!form.newEmail) return show("Enter a new email address.", "error");
    if (form.newEmail !== form.confirm) return show("Emails don't match.", "error");
    show("Verification email sent!");
  };

  return (
    <div>
      {toast && <Toast {...toast} />}
      <p style={styles.sectionTitle}>Change Email</p>
      <p style={styles.sectionSub}>We'll send a verification link to your new address.</p>
      <div style={{ ...styles.card, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
        <p style={{ margin: 0, fontSize: 13, color: "#166534" }}>
          Current email: <strong>{form.current}</strong>
        </p>
      </div>
      <Input label="New email address" type="email" placeholder="you@example.com" value={form.newEmail} onChange={set("newEmail")} icon={<Icon.Mail />} />
      <Input label="Confirm new email" type="email" placeholder="you@example.com" value={form.confirm} onChange={set("confirm")} icon={<Icon.Mail />} />
      <button onClick={handleSave} style={{ ...styles.btn, ...styles.primaryBtn }}>
        Update email
      </button>
    </div>
  );
}

function ChangePassword() {
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });
  const [toast, show] = useToast();
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const strength = (() => {
    const p = form.newPass;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["#e5e7eb", "#ef4444", "#f59e0b", "#3b82f6", "#22c55e"][strength];

  const handleSave = () => {
    if (!form.current) return show("Enter your current password.", "error");
    if (form.newPass !== form.confirm) return show("Passwords don't match.", "error");
    if (strength < 2) return show("Choose a stronger password.", "error");
    show("Password changed successfully!");
    setForm({ current: "", newPass: "", confirm: "" });
  };

  return (
    <div>
      {toast && <Toast {...toast} />}
      <p style={styles.sectionTitle}>Change Password</p>
      <p style={styles.sectionSub}>Use a strong, unique password for this account.</p>
      <Input label="Current password" type="password" placeholder="••••••••" value={form.current} onChange={set("current")} icon={<Icon.Lock />} />
      <Input label="New password" type="password" placeholder="••••••••" value={form.newPass} onChange={set("newPass")} icon={<Icon.Lock />} />

      {form.newPass && (
        <div style={{ marginTop: -12, marginBottom: 18 }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 5 }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ flex: 1, height: 4, borderRadius: 4, background: i <= strength ? strengthColor : "#e5e7eb", transition: "background 0.3s" }} />
            ))}
          </div>
          <p style={{ fontSize: 12, color: strengthColor, fontWeight: 600, margin: 0 }}>{strengthLabel}</p>
        </div>
      )}

      <Input label="Confirm new password" type="password" placeholder="••••••••" value={form.confirm} onChange={set("confirm")} icon={<Icon.Lock />} />
      <button onClick={handleSave} style={{ ...styles.btn, ...styles.primaryBtn }}>
        Change password
      </button>
    </div>
  );
}

function ChangeImage() {
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const [toast, show] = useToast();

  const handleFile = (file) => {
    if (!file?.type.startsWith("image/")) return show("Please upload an image file.", "error");
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div>
      {toast && <Toast {...toast} />}
      <p style={styles.sectionTitle}>Profile Photo</p>
      <p style={styles.sectionSub}>Upload a new profile picture. JPG or PNG, max 5MB.</p>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        style={{
          border: `2px dashed ${dragging ? "#f97316" : "#e5e7eb"}`,
          borderRadius: 16, padding: "40px 24px", textAlign: "center",
          background: dragging ? "#fff7ed" : "#f9fafb",
          transition: "all 0.2s", cursor: "pointer", marginBottom: 24,
        }}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {preview ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <img src={preview} alt="preview" style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", border: "3px solid #f97316" }} />
            <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>Click to change</p>
          </div>
        ) : (
          <>
            <div style={{ color: "#d1d5db", marginBottom: 12 }}><Icon.Upload /></div>
            <p style={{ fontWeight: 600, color: "#374151", margin: "0 0 4px" }}>Drop your photo here</p>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>or click to browse files</p>
          </>
        )}
        <input id="fileInput" type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
      </div>

      {preview && (
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => show("Photo saved!")} style={{ ...styles.btn, ...styles.primaryBtn }}>
            Save photo
          </button>
          <button onClick={() => setPreview(null)} style={{ ...styles.btn, ...styles.ghostBtn }}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

function Delete() {
  const [confirm, setConfirm] = useState("");
  const [step, setStep] = useState(1);
  const [toast, show] = useToast();

  const handleDelete = () => {
    if (confirm !== "DELETE") return show("Type DELETE to confirm.", "error");
    setStep(3);
  };

  return (
    <div>
      {toast && <Toast {...toast} />}
      <p style={styles.sectionTitle}>Delete Account</p>
      <p style={styles.sectionSub}>This action is permanent and cannot be undone.</p>

      {step === 3 ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>👋</div>
          <p style={{ fontWeight: 700, fontSize: 18, color: "#111827" }}>Account deleted</p>
          <p style={{ fontSize: 14, color: "#9ca3af" }}>Your account has been permanently removed.</p>
        </div>
      ) : (
        <>
          <div style={{ ...styles.card, background: "#fef2f2", border: "1px solid #fecaca" }}>
            <p style={{ fontWeight: 700, color: "#991b1b", margin: "0 0 8px" }}>⚠️ Warning</p>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: "#b91c1c", lineHeight: 2 }}>
              <li>All your data will be permanently deleted</li>
              <li>Your subscription will be cancelled immediately</li>
              <li>You won't be able to recover your account</li>
            </ul>
          </div>

          {step === 1 && (
            <button onClick={() => setStep(2)} style={{ ...styles.btn, ...styles.dangerBtn }}>
              <Icon.Trash /> I understand, continue
            </button>
          )}

          {step === 2 && (
            <div>
              <Input
                label='Type "DELETE" to confirm'
                placeholder="DELETE"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={handleDelete} style={{ ...styles.btn, ...styles.dangerBtn }}>
                  Delete my account
                </button>
                <button onClick={() => setStep(1)} style={{ ...styles.btn, ...styles.ghostBtn }}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Setting() {
  const [settings, setSettings] = useState({
    notifications: true, marketing: false, darkMode: false,
    language: "English", timezone: "UTC-5 (Eastern)",
    twoFactor: true, loginAlerts: true,
  });
  const [toast, show] = useToast();
  const toggle = (k) => setSettings({ ...settings, [k]: !settings[k] });

  const Toggle = ({ on, onToggle }) => (
    <button
      onClick={onToggle}
      style={{
        width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer",
        background: on ? "#f97316" : "#e5e7eb", position: "relative", transition: "background 0.25s", flexShrink: 0,
      }}
    >
      <span style={{
        position: "absolute", top: 2, left: on ? 22 : 2,
        width: 20, height: 20, borderRadius: "50%", background: "#fff",
        transition: "left 0.25s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </button>
  );

  const Row = ({ icon, title, sub, toggleKey }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: "1px solid #f3f4f6" }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: "#fff7ed", display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: "#111827" }}>{title}</p>
        <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>{sub}</p>
      </div>
      <Toggle on={settings[toggleKey]} onToggle={() => toggle(toggleKey)} />
    </div>
  );

  return (
    <div>
      {toast && <Toast {...toast} />}
      <p style={styles.sectionTitle}>Settings</p>
      <p style={styles.sectionSub}>Manage your preferences and account settings.</p>

      <div style={{ marginBottom: 28 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Notifications</p>
        <Row icon={<Icon.Bell />} title="Push notifications" sub="Get notified about activity" toggleKey="notifications" />
        <Row icon={<Icon.Mail />} title="Marketing emails" sub="News, updates, and offers" toggleKey="marketing" />
      </div>

      <div style={{ marginBottom: 28 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Appearance</p>
        <Row icon={<Icon.Moon />} title="Dark mode" sub="Switch to dark theme" toggleKey="darkMode" />
      </div>

      <div style={{ marginBottom: 28 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Security</p>
        <Row icon={<Icon.Shield />} title="Two-factor authentication" sub="Add extra login security" toggleKey="twoFactor" />
        <Row icon={<Icon.Lock />} title="Login alerts" sub="Email me on new sign-ins" toggleKey="loginAlerts" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div>
          <label style={styles.label}><Icon.Globe /> Language</label>
          <select value={settings.language} onChange={(e) => setSettings({ ...settings, language: e.target.value })} style={{ ...styles.input, background: "#f9fafb" }}>
            {["English", "Spanish", "French", "German", "Japanese"].map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label style={styles.label}>Timezone</label>
          <select value={settings.timezone} onChange={(e) => setSettings({ ...settings, timezone: e.target.value })} style={{ ...styles.input, background: "#f9fafb" }}>
            {["UTC-8 (Pacific)", "UTC-7 (Mountain)", "UTC-6 (Central)", "UTC-5 (Eastern)", "UTC+0 (GMT)", "UTC+5:30 (IST)"].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <button onClick={() => show("Settings saved!")} style={{ ...styles.btn, ...styles.primaryBtn }}>
        Save settings
      </button>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function HomeDashboard() {
  const [active, setActive] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "profile",         label: "Profile",          icon: <Icon.User />,  component: <Profile /> },
    { id: "changeEmail",     label: "Change Email",     icon: <Icon.Mail />,  component: <ChangeEmail /> },
    { id: "changePassword",  label: "Change Password",  icon: <Icon.Lock />,  component: <ChangePassword /> },
    { id: "changeImg",       label: "Profile Photo",    icon: <Icon.Image />, component: <ChangeImage /> },
    { id: "delete",          label: "Delete Account",   icon: <Icon.Trash />, component: <Delete /> },
    { id: "setting",         label: "Settings",         icon: <Icon.Cog />,   component: <Setting /> },
  ];

  const current = menuItems.find((m) => m.id === active);

  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", display: "flex" }}>
      <style>{`
        @keyframes slideIn { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        button:hover { opacity: 0.88; }
        input:focus, textarea:focus, select:focus { outline: none; }
        @media (max-width: 768px) {
          .sidebar { position: fixed !important; z-index: 40; height: 100vh; top: 0; left: 0; transform: translateX(-100%); transition: transform 0.3s; }
          .sidebar.open { transform: translateX(0); }
          .overlay { display: block !important; }
        }
      `}</style>

      {/* Sidebar */}
      <div
        className={`sidebar${sidebarOpen ? " open" : ""}`}
        style={{
          width: 240, background: "#111827", padding: "28px 16px",
          display: "flex", flexDirection: "column", flexShrink: 0,
          position: "sticky", top: 0, height: "100vh", overflowY: "auto",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px", marginBottom: 32 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>D</span>
          </div>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>Dashboard</span>
        </div>

        <p style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 10px", marginBottom: 10 }}>
          Account
        </p>

        {menuItems.map((item) => {
          const isActive = active === item.id;
          const isDanger = item.id === "delete";
          return (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 12px", borderRadius: 10, border: "none",
                cursor: "pointer", marginBottom: 4, textAlign: "left", width: "100%",
                background: isActive ? (isDanger ? "#7f1d1d" : "#1f2937") : "transparent",
                color: isActive ? (isDanger ? "#fca5a5" : "#fff") : (isDanger ? "#ef4444" : "#9ca3af"),
                fontWeight: isActive ? 700 : 500, fontSize: 14,
                transition: "all 0.15s",
                borderLeft: isActive ? `3px solid ${isDanger ? "#ef4444" : "#f97316"}` : "3px solid transparent",
              }}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}

        {/* User card at bottom */}
        <div style={{ marginTop: "auto", padding: "14px 12px", background: "#1f2937", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#f97316,#ea580c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff", flexShrink: 0 }}>AR</div>
          <div style={{ overflow: "hidden" }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#f9fafb", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Alex Rivera</p>
            <p style={{ margin: 0, fontSize: 11, color: "#6b7280", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>alex@example.com</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="overlay"
        style={{ display: "none", position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 30 }}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div style={{ flex: 1, padding: "32px 24px", maxWidth: 760, margin: "0 auto", width: "100%" }}>
        {/* Mobile menu toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ display: "none", marginBottom: 16, ...styles.btn, ...styles.ghostBtn, padding: "8px 14px" }}
          className="mobile-menu-btn"
        >
          {sidebarOpen ? <Icon.X /> : <Icon.Bars />} Menu
        </button>

        {/* Page header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ color: "#f97316" }}>{current?.icon}</div>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#111827" }}>{current?.label}</h1>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 8 }}>
            <span style={{ fontSize: 13, color: "#9ca3af" }}>Account</span>
            <span style={{ color: "#d1d5db" }}>›</span>
            <span style={{ fontSize: 13, color: "#f97316", fontWeight: 600 }}>{current?.label}</span>
          </div>
        </div>

        {/* Content card */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.04)" }}>
          {current?.component}
        </div>
      </div>
    </div>
  );
}