import React from 'react'



export default function Home() {


    return (
        <div id='main'>
            <div class="main-form ">
                <h2 class="head">Find your Flight:</h2>
                <form id="form-submit" action="">

                    <div class="input-from">
                        <label for="from">Leaving From:</label>
                        <select id="from-dropdown" name="from" type="text"></select>
                    </div>
                    <div class="input-to">
                        <label for="to">Going To:</label>
                        <select id="to-dropdown" name="to"></select>
                    </div>
                    <div class="input-dep-date">
                        <label for="dep-date">Departing On:</label>
                        <input class="dep-date" type="date" />
                    </div>
                    <div class="input-ret-date">
                        <label for="ret-date">Returning On:</label>
                        <input class="ret-date" type="date" />
                    </div>

                    <div name="tripRadios">
                        <div class="trip-select trip flex">
                            <div class="one-way">
                                <label for="oneway">One way</label>
                                <input type="radio" name="trip" id="oneway" value="one-way" checked required="required" />
                            </div>
                            <div class="round-trip">
                                <label for="round-trip">Round Trip</label>
                                <input type="radio" name="trip" id="round-trip" value="round-trip" required="required" />
                            </div>
                            <div class="multi-trip">
                                <label for="multitrip">Multi Trips</label>
                                <input type="radio" name="trip" id="multitrip" value="multi-trip" required="required" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="class-select flex">
                            <div class="f-class">
                                <label for="f-class">F - Class</label>
                                <input type="radio" name="class-select" id="f-class" value="f-class"
                                    required="required" />
                            </div>
                            <div class="b-class">
                                <label for="b-class">B - Class</label>
                                <input type="radio" name="class-select" id="b-class" value="b-class"
                                    required="required" />
                            </div>

                            <div class="e-class">
                                <label for="e-class">E - Class</label>
                                <input type="radio" name="class-select" id="e-class" value="e-class" checked="checked"
                                    required="required" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="age-select flex">
                            <div class="adult">
                                <label for="adult">Adult</label>
                                <input type="number" name="age-select" id="adult" value="1" min="1" max="8"
                                    required="required" />
                            </div>

                            <div class="child">
                                <label for="child">Child</label>
                                <input type="number" name="age-select" id="child" value="0" min="0" max="5" />
                            </div>

                            <div class="infant">
                                <label for="e-class">Infant</label>
                                <input type="number" name="age-select" id="infant" value="0" min="0" max="5" />
                            </div>
                        </div>
                    </div>

                    <div class="submit-btn">
                        <button type="submit" class="btn">Order Ticket Now</button>
                    </div>
                </form>
            </div>

            <div id="flights"></div>

            <div id="select-flight"></div>
        </div>
    )
}
