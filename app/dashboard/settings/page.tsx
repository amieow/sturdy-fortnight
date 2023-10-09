"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import CustomFormField from "@/components/atoms/CustomFormField";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/atoms/Form";
import { Button } from "@/components/atoms/Button";
import {Checkbox, CheckboxWithText} from "@/components/atoms/Checkbox";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  name: z.string(),
  email_address: z.string(),
});
const SettingPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Card className={"w-full lg:w-3/4 min-h-screen py-6 px-4"}>
      <CardHeader className={"space-y-6"}>
        <Typography size={"heading4"} as={"h4"} thick={"semibold"}>
          User Settings
        </Typography>
        <div className={"flex gap-6 items-center"}>
          {/*PHOTO*/}
          <Avatar className={"border-[1px] w-[100px] h-[100px]"}>
            <AvatarImage src={"../profil.png"} />
            <AvatarFallback>WW</AvatarFallback>
          </Avatar>
          {/*NAME*/}
          <div className={"space-y-2"}>
            <Typography as={"h5"} size={"heading4"}>
              Wade Warren
            </Typography>
            <Typography size={"textS"} color={"muted"}>
              Jakarta, Indonesia
            </Typography>
          </div>
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})}>
          <CardContent className={"space-y-8"}>
            {/*TOP*/}
            <div className={"flex flex-col lg:flex-row gap-16"}>
              <div className={"basis-1/2 space-y-3"}>
                <CustomFormField
                  control={form.control}
                  label={"Name"}
                  name={"name"}
                  placeholder={"Name"}
                />
                <CustomFormField
                  control={form.control}
                  label={"Email Address"}
                  name={"email_address"}
                  placeholder={"Email Address"}
                />
                <CustomFormField
                  control={form.control}
                  label={"City"}
                  name={"city"}
                  placeholder={"City"}
                />
              </div>
              <div className={"basis-1/2 space-y-3"}>
                <CustomFormField
                  control={form.control}
                  label={"Username"}
                  name={"username"}
                  placeholder={""}
                />
                <CustomFormField
                  control={form.control}
                  label={"Phone Number"}
                  name={"phone_number"}
                  placeholder={"Phone Number"}
                />
                <CustomFormField
                  control={form.control}
                  label={"Country"}
                  name={"country"}
                  placeholder={"Country"}
                />
              </div>
            </div>
            <div>
              <Typography as={"h3"} size={"heading4"} thick={"bold"}>
                Account Settings
              </Typography>
              <div className={"flex flex-col lg:flex-row gap-16 mt-4"}>
                <div className={"basis-1/2 space-y-6"}>
                  <CustomFormField
                    control={form.control}
                    label={"Email"}
                    name={"email"}
                    placeholder={"Email"}
                  />
                  <Button variant={"secondary"} className={"rounded-full"}>
                    Change Email
                  </Button>
                  <Typography size={"textS"} color={"muted"}>
                    * Please note, all notifications about your purchased course
                    will be moved to your new email.
                  </Typography>
                </div>
                <div className={"basis-1/2"}>
                  <CustomFormField
                    control={form.control}
                    label={"Change Password"}
                    name={"old_password"}
                    placeholder={"Enter old password"}
                    className={"mb-8"}
                    isPassword={true}
                  />
                  <CustomFormField
                    control={form.control}
                    label={""}
                    name={"phone_number"}
                    placeholder={"Enter new password"}
                    isPassword={true}
                  />
                  <CustomFormField
                    control={form.control}
                    label={""}
                    name={"country"}
                    placeholder={"Retype new password"}
                    isPassword={true}
                  />
                  <Button variant={"secondary"} className={"rounded-full mt-4"}>
                    Change Password
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className={"w-full"}>
              <div className={"space-y-6"}>
                <Typography as={"h3"} size={"heading4"} thick={"bold"}>
                  Email Notifications
                </Typography>
                <div className={"space-y-4"}>
                  <Typography>Send me:</Typography>
                  <CheckboxWithText text={"Receive Schoolabs promotions, recommended courses, and newsletters."}  name={""}/>
                  <CheckboxWithText text={"Announcements and Mentor Reviews"}  name={""}/>
                  <CheckboxWithText text={"Please exclude me from promotional email communications"}  name={""}/>
                </div>
              </div>
              <Button variant={"primary"} className={"dark:!text-white mt-8 float-right "}>Save Change</Button>
            </div>



          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SettingPage;
