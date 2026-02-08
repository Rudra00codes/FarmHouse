"use client"

import * as React from "react"
import { DayPicker, DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import "react-day-picker/dist/style.css"

export function BookingCalendar() {
    const [range, setRange] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 3),
    })

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-serif text-2xl mb-6 text-primary">Select Dates</h3>
            <div className="flex justify-center mb-6">
                <DayPicker
                    mode="range"
                    defaultMonth={new Date()}
                    selected={range}
                    onSelect={setRange}
                    numberOfMonths={2}
                    pagedNavigation
                    className="border rounded-md p-4"
                    modifiersClassNames={{
                        selected: "bg-primary text-secondary",
                        today: "font-bold text-accent",
                    }}
                />
            </div>

            <div className="border-t pt-6 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Check-in</p>
                    <p className="font-medium text-lg">
                        {range?.from ? format(range.from, "MMM dd, yyyy") : "Select date"}
                    </p>
                </div>
                <div className="h-8 w-[1px] bg-gray-200" />
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Check-out</p>
                    <p className="font-medium text-lg">
                        {range?.to ? format(range.to, "MMM dd, yyyy") : "Select date"}
                    </p>
                </div>
                <Button variant="harbour" disabled={!range?.from || !range?.to}>
                    Check Availability
                </Button>
            </div>
        </div>
    )
}
