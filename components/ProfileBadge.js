"use client";

import Image from "next/image";
import profilePhoto from "./profile-photo.jpg";

export default function ProfileBadge({ className = "", size = "medium", alt = "Shubham Sharma" }) {
  return (
    <span className={`profile-badge profile-badge-${size} ${className}`.trim()}>
      <Image
        src={profilePhoto}
        alt={alt}
        fill
        sizes={size === "large" ? "76px" : "48px"}
        className="profile-badge-image"
      />
    </span>
  );
}
