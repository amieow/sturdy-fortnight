import LoginLayout from "@/components/templates/LoginLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return <LoginLayout>{children}</LoginLayout>;
}
