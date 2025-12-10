"use client"

import StyledLink from "@/components/atoms/styledLink";
import AdminContentPage from "@/components/molecules/adminContentPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSetGlobalData } from "@/hooks/global/useSetGlobalData";
import { Plus } from "lucide-react";
import { register } from "module";
import { useEffect } from "react";

const page = () => {
  const { setGlobalData } = useSetGlobalData()

  useEffect(() => {
    setGlobalData("ST-PR", [
      {
        title: "Products",
      },
    ])
  }, [])

  return (
    <AdminContentPage>
      {/* <div>
        <div className="flex flex-1 justify-end gap-5">
          <StyledLink
            href="/admin/store/products/create"
            className="flex items-center gap-2"
          >
            <Plus />
            Create Product
          </StyledLink>
        </div>
      </div> */}
      <div
        className="grid grid-cols-12 gap-6"
      >
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Add new product</CardTitle>
            <CardDescription>
              Fill the form below to add a new product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="grid grid-cols-1 gap-6">
                <Field>
                  <FieldLabel htmlFor="name">Product Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe" />
                </Field>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="col-span-8 bg-muted/50">
        </Card>
      </div>
    </AdminContentPage>
  );
}

export default page;