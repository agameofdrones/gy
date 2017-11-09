<template>
    <f7-page class="bg">

    <f7-navbar title="Ask a question" back-link="Back" sliding></f7-navbar>

    <f7-block-title style="text-align:center">What is your question?</f7-block-title>
                        <div class="card">
                          <div class="card-content">
                            <div class="card-content-inner" >
                            <f7-list>
                                <f7-list-item>
                                <f7-input type="textarea" placeholder="Enter your question here"></f7-input>
                                </f7-list-item>
                            </f7-list>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header">Select a Category</div>
                          <div class="card-content">
                            <div class="card-content-inner" >
                        <f7-list form>
                            <!-- Enables Smart Select behavior by adding "smart-select" prop -->
                            <f7-list-item smart-select title="Category" smart-select-open-in="picker">
                                <!-- Select with values inside -->
                                <select name="question-category">
                                <option value="health" selected>Health</option>
                                <option value="moves">Moves</option>
                                <option value="mindset">Mindset</option>
                                <option value="wellbeing">Wellbeing</option>
                                <option value="travel">Travel & Tourism</option>
                                <option value="technology">Technology</option>
                                </select>
                            </f7-list-item>
                        </f7-list>
                            </div>
                          </div>
                        </div>

                        <f7-button style="margin:10%" class="button active">Ask</f7-button>
    </f7-page>
</template>