import { useState } from "react";

const SETTINGS_TABS = [
  { icon: "👤", label: "Profile" },
  { icon: "🏢", label: "Organization" },
  { icon: "≡", label: "Platform Configuration" },
  { icon: "✺", label: "Sensor Configuration" },
  { icon: "👥", label: "Users & Roles" },
  { icon: "🛈", label: "Security" },
  { icon: "🌐", label: "Units & Localization" },
  { icon: "◐", label: "Appearance" },
  
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [profile, setProfile] = useState({
    fullName: "Elena Marsh",
    jobTitle: "Platform Administrator",
    email: "e.marsh@oceanobs.org",
    phone: "+1 (808) 555-0148",
    timezone: "Pacific/Honolulu (UTC-10)",
    language: "English (US)",
  });

  const handleChange = (field) => (e) =>
    setProfile((p) => ({ ...p, [field]: e.target.value }));

  return (
        <div className="settings-content">
          <div className="settings-page-head">
            <h1>Settings</h1>
            <p>Manage your profile, platform configuration, data pipelines, and system preferences.</p>
          </div>

          <div className="settings-layout">
            <nav className="settings-nav">
              {SETTINGS_TABS.map((tab) => (
                <button
                  key={tab.label}
                  className={`settings-tab ${activeTab === tab.label ? "is-active" : ""}`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  <span className="settings-tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="settings-panel">
              {activeTab === "Profile" ? (
                <>
                  <div className="settings-card settings-profile-header">
                    <div className="settings-profile-id">
                      <div className="settings-avatar">OS</div>
                      <div>
                        <div className="settings-profile-name">Dr. {profile.fullName}</div>
                        <div className="settings-profile-meta">
                          {profile.jobTitle} · Pacific Research Division
                        </div>
                      </div>
                    </div>
                    <div className="settings-profile-actions">
                      <button className="settings-btn settings-btn-secondary">Change photo</button>
                      <button className="settings-btn settings-btn-primary">Save changes</button>
                    </div>
                  </div>

                  <div className="settings-card">
                    <div className="settings-card-heading">
                      <h2>Personal information</h2>
                      <p>Your name and contact details as they appear across the platform.</p>
                    </div>

                    <div className="settings-form-grid">
                      <label className="settings-field">
                        <span>Full name</span>
                        <input value={profile.fullName} onChange={handleChange("fullName")} />
                      </label>
                      <label className="settings-field">
                        <span>Job title</span>
                        <input value={profile.jobTitle} onChange={handleChange("jobTitle")} />
                      </label>
                      <label className="settings-field">
                        <span>Email address</span>
                        <input value={profile.email} onChange={handleChange("email")} />
                      </label>
                      <label className="settings-field">
                        <span>Phone number</span>
                        <input value={profile.phone} onChange={handleChange("phone")} />
                      </label>
                      <label className="settings-field">
                        <span>Time zone</span>
                        <select value={profile.timezone} onChange={handleChange("timezone")}>
                          <option>Pacific/Honolulu (UTC-10)</option>
                          <option>America/Los_Angeles (UTC-8)</option>
                          <option>UTC</option>
                        </select>
                      </label>
                      <label className="settings-field">
                        <span>Preferred language</span>
                        <select value={profile.language} onChange={handleChange("language")}>
                          <option>English (IN)</option>
                          <option>English (UK)</option>
                          
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="settings-card settings-security-row">
                    <div>
                      <h2>Password</h2>
                      <p>Last changed 74 days ago.</p>
                    </div>
                    <button className="settings-btn settings-btn-secondary">Change password</button>
                  </div>

                  <div className="settings-card settings-security-row">
                    <div>
                      <h2>Two-factor authentication</h2>
                      <p>Manage under the Security tab.</p>
                    </div>
                    <span className="settings-status-enabled">Enabled</span>
                  </div>
                </>
              ) : (
                <div className="settings-card settings-placeholder">
                  <h2>{activeTab}</h2>
                  <p>This section hasn't been wired up yet — drop in the fields for {activeTab.toLowerCase()} here.</p>
                </div>
              )}
            </div>
          </div>

          <footer className="settings-footer">Ocean Observation Platform · Settings</footer>
        </div>
    
    
  );
}