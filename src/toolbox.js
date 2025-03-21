/* eslint-disable */
export default (Blockly, value, searching) => {
    /* eslint-disable */

    const allow_toolbox_search = true

    if (allow_toolbox_search) {
        var toolbox_search_category = `
    
    <category name="Search" colour="#42556e" css-icon="customIcon2 fa fa-search">
    <label text="Search category! Version 1.0"></label>
    <label text=""></label>
    <label text="Want to search?"></label>
    <label text="PC: Right click on the workspace > Search for block"></label>
    <label text="Touch: Hold on the workspace > Search for block"></label>
        <!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->
    </category>
    <sep class="bt"/>
    `
    } else {
        var toolbox_search_category = ``
    }

    var toolbox_xml_contents = (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        
    <!--
    <category name="Tests" colour="#ff0000" popoooopp="LINE HIDDEN FROM SEARCH">
        <block type="jg_tests_doubleDropdown" popoooopp="LINE HIDDEN FROM SEARCH"/>
        <block type="jg_tests_typeChange" popoooopp="LINE HIDDEN FROM SEARCH"/>
        <block type="jg_tests_deleteInput" popoooopp="LINE HIDDEN FROM SEARCH"/>
        <block type="jg_tests_validator" popoooopp="LINE HIDDEN FROM SEARCH"/>
    </category>
    -->
	
    ${toolbox_search_category}

	<category name="{{ TOOLBOX_LOGIC }}" colour="#5b80a5">
            <block type="controls_if" />
            <block type="logic_compare">
                <field name="OP">EQ</field>
            </block>
            <block type="logic_operation">
                <field name="OP">AND</field>
            </block>
            <block type="logic_negate" />
            <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </block>
            <block type="logic_null" />
            <block type="logic_ternary" />
        </category>
        <category name="{{ TOOLBOX_LOOPS }}" colour="#5ba55b">
            <block type="s4d_forever">
            </block>
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_whileUntil">
                <field name="MODE">WHILE</field>
            </block>
            <block type="controls_for">
                <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
                <value name="BY">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_forEach">
                <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
            </block>
            <block type="controls_flow_statements">
                <field name="FLOW">BREAK</field>
            </block>
            <label text="More Options" web-class="boldtext"></label>
            <block type="s4d_forever2">
                <value name="LOG">
                    <shadow type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_forever3">
                <value name="LOG">
                    <shadow type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </shadow>
                </value>
                <value name="DELAY">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="{{ TOOLBOX_MATH }}" colour="#5b67a5">
            <block type="math_number">
                <field name="NUM">0</field>
            </block>
            <block type="math_arithmetic">
                <field name="OP">ADD</field>
                <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_single">
                <field name="OP">ROOT</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">9</field>
                    </shadow>
                </value>
            </block>
            <block type="math_trig">
                <field name="OP">SIN</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">45</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constant">
                <field name="CONSTANT">PI</field>
            </block>
            <block type="math_number_property">
                <mutation divisor_input="false" />
                <field name="PROPERTY">EVEN</field>
                <value name="NUMBER_TO_CHECK">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="math_round">
                <field name="OP">ROUND</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">3.1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_on_list">
                <mutation op="SUM" />
                <field name="OP">SUM</field>
            </block>
            <block type="math_modulo">
                <value name="DIVIDEND">
                    <shadow type="math_number">
                        <field name="NUM">64</field>
                    </shadow>
                </value>
                <value name="DIVISOR">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constrain">
                <value name="VALUE">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="LOW">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="HIGH">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_int">
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_float" />
        </category>
        <category name="{{ TOOLBOX_TEXT }}" colour="#5ba58c">
            <block type="text">
                <field name="TEXT" />
            </block>
						<block type="text_multiline">
									<field name="TEXT" />
					</block>
            <block type="text_join">
                <mutation items="2" />
            </block>

            <block type="text_replace">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>               
            </block>
						<block type="text_isEmpty"/>
						<block type="text_reverse"/>
            <block type="s4d_newline"></block>
            <block type="text_append">
                <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT" />
                    </shadow>
                </value>
            </block>
            <block type="text_length">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_ends_with">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
            <value name="SUBSTRING">
                <shadow type="text">
                    <field name="TEXT">a</field>
                </shadow>
            </value>
            </block>
<block type="weird-to-normal"/>
            <block type="s4d_starts_with">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="SUBSTRING">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
            </block>

            <block type="s4d_includes">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="INCLUDES">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
            </block>

            <block type="text_isEmpty">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT" />
                    </shadow>
                </value>
            </block>
            <block type="text_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
                <value name="FIND">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_charAt">
                <mutation at="true" />
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
            </block>
            <block type="text_getSubstring">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
            </block>
            <block type="text_changeCase">
                <field name="CASE">UPPERCASE</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_trim">
                <field name="MODE">BOTH</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
						<block type="text_count"></block>
						<block type="jg_text_isboolean">
                            <value name="TEXT">
                                <shadow type="text">
                                    <field name="TEXT">true</field>
                                </shadow>
                            </value>
                        </block>
						<block type="jg_text_booleanfrom">
                            <value name="TEXT">
                                <shadow type="text">
                                    <field name="TEXT">true</field>
                                </shadow>
                            </value>
                        </block>
						<block type="jg_text_hasnumber">
                            <value name="TEXT">
                                <shadow type="text">
                                    <field name="TEXT">abc123</field>
                                </shadow>
                            </value>
                        </block>
        </category>
        <category name="{{ TOOLBOX_LISTS }}" colour="#745ba5">
            <block type="lists_create_with">
                <mutation items="0" />
            </block>
            <block type="lists_create_with">
                <mutation items="3" />
            </block>
            <block type="lists_repeat">
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_length" />
            <block type="lists_isEmpty" />
            <block type="list_contains"/>
            <block type="lists_sort"/>
						<block type="lists_reverse"/>
            <block type="lists_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getIndex">
                <mutation statement="false" at="true" />
                <field name="MODE">GET</field>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_setIndex">
                <mutation at="true" />
                <field name="MODE">SET</field>
                <field name="WHERE">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getSublist">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="push_to_list">
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_split">
                <mutation mode="SPLIT" />
                <field name="MODE">SPLIT</field>
                <value name="DELIM">
                    <shadow type="text">
                        <field name="TEXT">,</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="{{ TOOLBOX_COLORS }}" colour="#a5745b">
            <block type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </block>
            <block type="colour_random" />
            <block type="fz_color"/>
            <block type="colour_rgb">
                <value name="RED">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="GREEN">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="BLUE">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="colour_blend">
                <value name="COLOUR1">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#ff0000</field>
                    </shadow>
                </value>
                <value name="COLOUR2">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#3333ff</field>
                    </shadow>
                </value>
                <value name="RATIO">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>
        </category>
        <sep class="bt" />
        <category name="{{ TOOLBOX_VARIABLES }}" colour="#a55b80" custom="VARIABLE"/>
<category name="{{ TOOLBOX_VARIABLES }}-expanded" colour="#a55b80">
<label text="Make global/local variables for functions and other stuff"></label>
<label text="Compatible with variables category"></label>
<block type="import_all"><value name="VAR"><shadow type="text"><field name="TEXT"/>hey</shadow></value></block>

<block type="express_var"><value name="VAR"><shadow type="text"><field name="TEXT"/>hey</shadow></value></block>

<block type="blank"><field name="TEXT"/></block>
</category>

        <category name="{{ TOOLBOX_FUNCTIONS }}" colour="#995ba5" custom="PROCEDURE"/>

        <!--<category name="Objects" colour="#cc59e3">
            <block type="jg_object_getvalue"/>
        </category> -->
	
        <category name="{{ TOOLBOX_OTHER }}" colour="#D14081"> 
        
	  
            <block type="s4d_print">
                <value name="PRINT">
                    <block type="frost_other_err"/>
                </value>
            </block>
            <block type="s4d_clearconsole"/>
            <block type="s4d_run_save_output"></block>
            <block type="s4d_wait_seconds">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>
<block type="blank_code"><field name="TEXT"/></block>
            <block type="s4d_eval"></block>
            <block type="s4d_eval2"></block>
            <block type="s4d_try_and_catch">
                <value name="catch">
                    <block type="s4d_print">
                        <value name="PRINT">
                            <block type="frost_other_err"/>
                        </value>
                    </block>
                </value>
            </block>
            <block type="frost_other_err"/>
            <block type="s4d_return"></block>
            <block type="s4d_string_to_number"></block>
	    <block type="is_a_number_or_string"></block>
        <block type="jg_object_getvalue"/>
        <block type="anti_link"/>
        </category>
       
	  
                <sep class="bt"/>
                    <category name="Favorites" colour="#FFFF00" css-icon="customIcon fa fa-star">
                        <!-- FAVORITES_CATEGORY_CONTENT_GOES_HERE_89476138947230470923750327973490 -->
                    </category>
				<sep class="bt"/>
				
			<category name="Member's Blocks" expanded="true">
				<category name="ahq" colour="#ff0000" disabled="true">
        <label text="AHQ's Simple Host Auth" web-class="boldtext"></label>
        <block type="simple_host_auth"/>
        <label text="Other" web-class="boldtext"></label>
        <block type="server_file"/>
        <block type="snd_ahq"/>
        <block type="ahq_value_snd"/>
        <category name="member" colour="#006600">
        <label text="Fetch members of a server" web-class="boldtext"></label>
        <block type="s4d_get_rndm"/>
        <label text="Get random member" web-class="boldtext"></label>
        <block type="s4d_get_rndmber"/>
        </category>
        <category name="forms" colour="#66ffff">
        <block type="on_real_form"/>
        <block type="embed_send_round">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
        </block>
        <block type="ahq_ahq_ahq_modal"/>
        <block type="ahqq_ahq_modal"/>
        <label text="Form Info" web-class="boldtext"></label>
        <block type="id_form_ahq"/>
        <block type="id_textbox_ahq"/>
        <block type="clkr_form_ahq"/>
        <block type="channel_form_ahq"/>
        <block type="server_form_ahq"/>
        <block type="reply_ahq_modal_text"/>
        <block type="something_modal"/>
        <label text="Make Forms" web-class="boldtext"></label>
        <block type="make_ahq_modal"/>
        <block type="make_ahq_modal_text"/>
        <block type="style_ahq_modal"/>
        <label text="Send Forms" web-class="boldtext"></label>
        <block type="snd_ahq_modal"/>
        </category>
        <category name="button" colour="#ff0019">
        <label text="Event" web-class="boldtext"></label>
        <block type="on_real_button"/>
        <label text="Button Information" web-class="boldtext"></label>
        <block type="id_btn_srv"/>
        <block type="id_btn_ch"/>
        <block type="id_btn_clkr"/>
        <block type="id_btn_ahq"/>
        <label text="Embed Information" web-class="boldtext"></label>
        <block type="embed_btn_ahq"/>
        <block type="embed_send_round">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
        </block>
        <label text="Button Actions" web-class="boldtext"></label>
        <block type="updte_ahq_button"/>
        <block type="rply_ahq_button"/>
        <label text="Send button" web-class="boldtext"></label>
        <block type="snd_ahq_button"/>
        <label text="Button Creation Stuff" web-class="boldtext"></label>
        <block type="make_ahq_button"/>
        <block type="style_ahq_button"/>
        <block type="label_ahq_button"/>
        <block type="emoji_ahq_button"/>
        <block type="url_ahq_button"/>
        <block type="d_ahq_button"/>
        </category>
        <category name="cmd register" colour="#6600cc">
        <label text="Create a slash command" web-class="boldtext"></label>
        <block type="s4d_reg_slash"/>
        <block type="s4d_reg_slash_options"/>
        <block type="s4d_reg_new_options"/>
        </category>
        <category name="profanity" colour="#ff0000">
        <block type="ahq_bdwrd"/>
        <block type="ahq_bdwrd_cn"/>
        </category>
        <category name="embed-read" colour="#993399">
        <block type="ahq_embed_is"/>
        <block type="ahq_embed_info"/>
        </category>
        <category name="V2 Embeds" colour="#cc60db">
                <block type="s4d_embed_create"/>
                <block type="s4d_message_embed_lime"/>
                <block type="s4d_embed_edit"/>
                <block type="s4d_embed_send">
                <value name="NAME">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
                </block>
                <block type="embed_send_round">
                <value name="Label">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
                </block>
        </category>
        <category name="chatbot" colour="#ff0000">
        <block type="chat_ahq"/>
        </category>
        <category name="mod" colour="#ff0880">
        <block type="ahq-mod"/>
        </category>
        <category name="Convert API" colour="#3333ff">
        <label text="API starter" web-class="boldtext"></label>
        <block type="convert_api_code"/>
        <label text="Resources" web-class="boldtext"></label>
        <block type="convert_button"/>
        <block type="convert_embed"/>
        <label text="Main blocks" web-class="boldtext"></label>
        <block type="convert_api_task"/>
        <block type="save_api_code"/>
        <block type="convert_api_file"/>
        <block type="send_ahq_converted"/>
        </category>
        <category name="Voice" colour="#000099">
        <block type="voice_event"/>
        <block type="voice_switch"/>
        <block type="voice_leave"/>
        <label text="Properties" web-class="boldtext"></label>
        <block type="prop_voice"/>
        <label text="Methods" web-class="boldtext"></label>
        <block type="disconnect_voice"/>
        <block type="act_voice"/>
        </category>
        </category>

        <category name="henpokpok" colour="#64C9FF">
          <category name="Timeout" colour="#FF6464">
          <block type="mute_ahq"/>
          </category>
        <category name="Reactions" colour="#FF6464">
        <label text="Reations event (under construction)" web-class="boldtext"></label>
        <block type="reaction_added"/>
        <block type="reaction_removed"/>
        <label text="React info" web-class="boldtext"></label>
        <block type="react_member"/>
        <block type="react_emoji"/>
        <block type="react_messageId"/>
        </category>
        </category>
	
	<category name="AlexCdDg" colour="#06cfaa">
        
        <category name="TTS" colour="#1010b5">
        <label text="Connect and use TTS" web-class="boldtext"></label>
        <block type="tts-test"/>
	<block type="tts_channel"/>
        </category>
	<category name="Image Finder" colour="#00c7ad">
        <block type="get_image"/>
	<block type="url_image"/>
        </category>
	<category name="Typing" colour="#f79400">
        <label text="Typing event" web-class="boldtext"></label>
        <block type="typing_start"/>
        <label text="Typing blocks" web-class="boldtext"></label>
        <block type="typing_server"/>
        <block type="typing_channel"/>
        <block type="typing_member"/>
        </category>
	<category name="Other" colour="#c70e6d">
        <block type="hig_role"/>
        <label text="This will detect the color of highest role" web-class="boldtext"></label>
        <block type="member_color"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="role_color"/>
        <block type="role_name"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="get_all_roles"/>
        <block type="all_roles"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="create_emoji"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="vc_kick"/>
	</category>
	<category name="Channel" colour="#0c97f0">
        <block type="isdm"/>
        <block type="first_channel"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="category_channel"/>
        <block type="vcategory_channel"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="renamec"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="channel_perms"/>
        <block type="everyn"/>
        <label text="ㅤ" web-class="boldtext"></label>
        <block type="new_invite"/>
        <block type="invite_ur"/>
	</category>
 	</category>

<category name="frostzzone" colour="#347dfa">
<category name="Scratch and Github" colour="#1f1f1f">
<label text="Github" web-class="boldtext"></label>
<block type="github_get_then"/>
<label text="For profile" web-class="boldtext"></label>
<block type="github_what_stat"/>
<label text="" web-class="boldtext"></label>
<label text="" web-class="boldtext"></label>
<label text="Scratch" web-class="boldtext"></label>
<block type="scratch_get_about_then"/>
<block type="scratch_about_user"/>
</category>

<category name="Useless" colour="#2a46fa" hidden="true"><!-- LINE HIDDEN FROM SEARCH -->
<block type="frost_image"/><!-- LINE HIDDEN FROM SEARCH -->
<block type="frost_drop1"/><!-- LINE HIDDEN FROM SEARCH -->
<block type="poll"><!-- LINE HIDDEN FROM SEARCH -->
<value name="title"><!-- LINE HIDDEN FROM SEARCH -->
<shadow type="text"><!-- LINE HIDDEN FROM SEARCH -->
<field name="TEXT">Poll time</field><!-- LINE HIDDEN FROM SEARCH -->
</shadow></value><!-- LINE HIDDEN FROM SEARCH -->
<value name="message"><shadow type="text"><field name="TEXT">You like polls?</field></shadow></value><value name="color"><!-- LINE HIDDEN FROM SEARCH -->
<block type="colour_picker"><!-- LINE HIDDEN FROM SEARCH -->
</block></value><value name="upvote"><shadow type="text"><field name="TEXT">👍</field></shadow></value><value name="downvote"><shadow type="text"><!-- LINE HIDDEN FROM SEARCH -->
<field name="TEXT">👎</field></shadow></value><!-- LINE HIDDEN FROM SEARCH -->
</block><!-- LINE HIDDEN FROM SEARCH -->
</category><!-- LINE HIDDEN FROM SEARCH -->

<category name="Messages" colour="#2a46fa">

<block type="frost_real_reply">
<value name="CONTENT">
  <shadow type="text">
    <field name="TEXT">Hey!</field>
  </shadow>
</value>
<value name="boolean">
  <shadow type="logic_boolean">
                <field name="Boolean">TRUE</field>
            </shadow>
        </value>
</block>
<block type="frost_real_reply_then">
<value name="CONTENT">
  <shadow type="text">
    <field name="TEXT">Hey!</field>
  </shadow>
</value>
<value name="boolean">
  <shadow type="logic_boolean">
                <field name="Boolean">TRUE</field>
            </shadow>
        </value>
</block>
<block type="frost_real_reply_add_reaction">
<value name="REACTION"><shadow type="text"><field name="TEXT">👍</field></shadow></value>
</block>
<block type="frost_real_reply_edit">
<value name="CONTENT"><shadow type="text"><field name="TEXT">Hey!</field></shadow></value>
</block>
<block type="frost_real_reply_delete"/>
<block type="frost_typing"><value name="time"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="CONTENT"><shadow type="text"><field name="TEXT">Hey!</field></shadow></value>
</block>
<label text="ㅤ" web-class="boldtext"></label>
</category>

<category name="Slash command stuff" colour="4c97ff">
<label text='⚠️ Deletes commands set by "Slash command GUI" ⚠️'></label>
<label text='Only one "Create slash comamnds" block'></label>
<label text='If not it breaks'></label>
<block type="frost_slash_register"/>
<block type="frost_slash_command">
<value name="NAME">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="DESC">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
</block>
<block type="frost_slash_sub_command_group">
<value name="NAME">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="DESC">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
</block>
<block type="frost_slash_sub_command">
<value name="NAME">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="DESC">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
</block>
<block type="frost_slash_options1">
<value name="NAME">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="DESC">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="REQUIRED">
  <shadow type="logic_boolean">
    <field name="BOOL">TRUE</field>
  </shadow>
</value>
</block>
<block type="frost_slash_options2">
<value name="NAME">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="DESC">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="REQUIRED">
  <shadow type="logic_boolean">
    <field name="BOOL">TRUE</field>
  </shadow>
</value>
</block>
<block type="frost_slash_choices">
<value name="NAME">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
<value name="OPTION_NAME">
  <shadow type="text">
    <field name="TEXT"></field>
  </shadow>
</value>
</block>
<block type="fz_attachment_info"/>
<block type="fz_attachment_info2"/>
<label text="Mrredo stuff for slash comamnds"></label>
        <block type="on_slash"></block>
        <block type="interaction_name"></block>
        <block type="options">
        <mutation mode="string"></mutation></block>
        <block type="interaction_author"></block>
        <block type="interaction_channel"></block>
        <block type="interaction_guild"></block>
        <block type="interaction_voice_channel"></block>
        <block type="interaction_voice_channel_id"></block>
        <block type="bot_voice_channel_id"></block>
        <block type="slash_reply"></block>
        <block type="slash_edit"></block>
<label text="ㅤ" web-class="boldtext"></label>
</category>

<category name="Category/Channel" colour="#2f64fa" hidden="false">
<block type="frost_channel_types"><value name="Channel"><shadow type="s4d_message_channel"></shadow></value></block>
<block type="crosspost"/>
<block type="frost_slowmode"><value name="CHANNEL"><shadow type="s4d_message_channel"></shadow></value><value name="TIME"><shadow type="math_number"><field name="NUM">5</field></shadow></value><value name="REASON"><shadow type="text"><field name="TEXT">Hey!</field></shadow></value></block>

<block type="frost_message_category"/>
<block type="frost_category_get"/>
<block type="frost_category_id"/>
<block type="create_category_then"/>
<block type="fz_channel"/>
<block type="frost_created_cat"/>
<label text="ㅤ" web-class="boldtext"></label>
</category>

<category name="Embed" colour="#40bf4a">
<label text="For Androz Embed"></label>
<block type="frost_create_field"/>
<block type="frost_add_field"/>
<label text="For Jose Or Redo Embeds"></label>
<block type="frost_send_embed_rr"/>
<label text="ㅤ" web-class="boldtext"></label>
</category>

<category name="filesystem (fs)" colour="#347dfa">
<block type="frost_fs_read"><statement name="THEN"><block type="controls_if"><value name="IF0"><block type="frost_fs_err"></block></value><statement name="DO0"><block type="s4d_print"><value name="PRINT"><block type="frost_fs_err"></block></value></block></statement></block></statement></block>
<block type="frost_fs_append"><statement name="THEN"><block type="controls_if"><value name="IF0"><block type="frost_fs_err"></block></value><statement name="DO0"><block type="s4d_print"><value name="PRINT"><block type="frost_fs_err"></block></value></block></statement></block></statement></block>
<block type="frost_fs_write"><statement name="THEN"><block type="controls_if"><value name="IF0"><block type="frost_fs_err"></block></value><statement name="DO0"><block type="s4d_print"><value name="PRINT"><block type="frost_fs_err"></block></value></block></statement></block></statement></block>
<block type="frost_fs_rename"><statement name="THEN"><block type="controls_if"><value name="IF0"><block type="frost_fs_err"></block></value><statement name="DO0"><block type="s4d_print"><value name="PRINT"><block type="frost_fs_err"></block></value></block></statement></block></statement></block>
<block type="frost_fs_delete"><statement name="THEN"><block type="controls_if"><value name="IF0"><block type="frost_fs_err"></block></value><statement name="DO0"><block type="s4d_print"><value name="PRINT"><block type="frost_fs_err"></block></value></block></statement></block></statement></block>
<label text="For open and read (Returns the contents of the file)"></label>
<block type="frost_fs_data"/>
<label text="For if you get an error (is a boolean and string)"></label>
<block type="frost_fs_err"/>
<label text="ㅤ" web-class="boldtext"></label>
</category>

<category name="Emoji" colour="#347dfa" hidden="false">
<label text="Welcome to emojis"></label>
<block type="fz_get_emoji"/>
<block type="fz_create_emoji"/>
<block type="fz_delete_emoji"/>
<block type="fz_emoji_info"/>
<block type="fz_emoji_animated"/>
<block type="fz_emoji_exist"/>
<block type="fz_get_all_emoji"/>
<block type="fz_get_all_emoj"/>
<block type="fz_unlock_emoji"/>
<block type="fz_lock_emoji"/>
<label text="ㅤ" web-class="boldtext"></label>
</category>

<category name="event" colour="230">
<block type="create_event"><value name="NAME"><shadow type="text"><field name="TEXT">Hey</field></shadow></value></block>
<block type="emit_event"><value name="NAME"><shadow type="text"><field name="TEXT">Hey</field></shadow></value></block>
</category>

<category name="Other" colour="#5ba58b">
<block type="frost_fs_err"/>
<block type="frost_current"/>
<block type="frost_json_to_string"/>
</category>

<category name="Translate" hidden="true">
<block name="frost_translate"/>
</category>
</category>

<category name="Retro and XL83" colour="#AAE941">
<category name="QR Code" color="#5ba58b">
    <block type="create_qr_then"/>
    <block type="qr"/>
</category>
<category name="temp channels" colour="#5ba58b">
    <block type="s4d_temp_register"/>
    <block type="temp_member_name"/>
    <block type="s4d_temp_unregister"/>
</category>
<category name="Weky" colour="#5ba58b">
    <block type="snake_js"/>
    <block type="s4d_cal"/>
</category>
	<category name="Games" colour="#5ba58b">
  <label text="Akinator gamemodes: character, animal, object" web-class="boldtext"></label>
	 				<block type="Akinator">
           <value name="MESSAGE">
           <shadow type="aki_gametype">
           </shadow>
           </value>
           </block>
					<block type="s4d_snake"/>
					</category>
				<category name="Reddit" colour="#5ba58b">
					
					 <block type="ran_red_post"/>
					  <block type="postVars"/>
	
					  
					     <block type="get_about_then"/>
					    <block type="about_user"/>
					  </category>
					  
					  <category name="Pc/Server Stats" colour="#a5745b">
					  <block type="ps_os_stats"/>
					  <block type="get_cpu_uptime"/>
					  <block type="cpu"/>
					    
					    </category>
					    <category name="Music [retro]" colour="#a5745b">
					    <label text="Create a perfect music player" web-class="boldtext"></label>
        <label text="Made with discord-music-player DMP" web-class="boldtext"></label>
        <label text="WARNING DON'T USE WITH JOSE MUSIC BLOCKS" web-class="boldtext"></label>
	<label text="Events :D" web-class="boldtext"></label>
        <block type="first_track"/>
        <block type="track_start"/>
        <block type="empty"/>
        <block type="kicked"/>
        <block type="queue_error"/>
        <block type="track_added"/>
        <label text="Blocks :D" web-class="boldtext"></label>
        <block type="discord_connect"/>
        <block type="better_stop"/>
        <block type="better_play"/>
        <block type="better_pause"/>
        <block type="better_resume"/>
        <block type="better_shuffle"/>
        <block type="better_skip"/>
        <block type="better_loop_song"/>
        <block type="better_loop_queue"/>
        <block type="loop_stop"/>
	<block type="better_volume"/>
        <label text="Queue info :D" web-class="boldtext"></label>
        <block type="better_song_thumbnail"/>
        <block type="new_track_name"/>
        <block type="added_song_name"/>
        <block type="better_track_url"/>
        <block type="retro_track_channel"/>
        <block type="better_duration"/>
	<block type="better_voice_channel"/>
	<block type="better_vcid"/>
        <block type="better_botvcid"/>
	<block type="song-first"/>
					    </category>
<category name="Ticketing System" colour="#5b80a5">
	<label text="You can also type local" web-class="boldtext"></label>
		<block type="ticket_connect"/>
		<label text="Do npm install tickets-discord in shell after running" web-class="boldtext"></label>
		<block type="archieve_ticket"/>
		<block type="close_ticket"/>
		<block type="ticket_setup"/>
		<block type="unarchieve_ticket"/>
    <label text="Slash version" web-class="boldtext"></label>
    <block type="slash_archieve_ticket"/>
		<block type="slash_close_ticket"/>
		<block type="slash_ticket_setup"/>
		<block type="slash_unarchieve_ticket"/>
<block type="slash_message_channel"/>
        </category>
	<category name="lyric finder" colour="#5ba58b">
	 	<block type="find_lyric_than"/>
		<block type="lyric"/>
	</category>
</category>

<category name="JeremyGamer13" colour="#FFAA00">
<label text="Need help? Go to this master document:" web-class="boldtext"></label>
          <label text="shorturl.at/nCFV7" web-class="boldtext"></label>
<category name="Messaging" colour="210">
            <block type="jg_typingChannel">
                <value name="CHANNEL">
                    <block type="s4d_message_channel"/>
                </value>
            </block>
            <block type="jg_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <block type="jg_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <label text="Button row support:" web-class="boldtext"></label>
            <block type="jg_button_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <block type="jg_button_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="CHANNEL">
                  <block type="s4d_message_channel"/>
                </value>
            </block>
            <label text="For use in slash commands:" web-class="boldtext"></label>
            <block type="jg_slash_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>
            <block type="jg_slash_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>
            <label text="Slash button row support:" web-class="boldtext"></label>
            <block type="jg_slash_button_sendImage">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>
            <block type="jg_slash_button_sendImageMSG">
                <value name="NAME">
                  <block type="text">
                    <field name="TEXT">file.txt</field>
                  </block>
                </value>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Hey!</field>
                  </block>
                </value>
                <value name="ROW">
                  <block type="text">
                    <field name="TEXT">buttons</field>
                  </block>
                </value>
                <value name="HIDE">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
            </block>
            </category>
            <category name="Image Editing" colour="260">
            <label text="Getting started" web-class="boldtext"></label>
            <block type="jg_beginJimp"/>
            <block type="jg_saveJimpageAs"/>
            <label text="Effects and extras" web-class="boldtext"></label>

            
            <block type="jg_jimp_drawtext"/><!--
            <block type="jg_jimp_U2_drawtext"/>
            -->

            <block type="jg_jimp_brightnesscontrast"/>
            <block type="jg_jimp_basicE"/>
            <block type="jg_jimp_tpixels"/>
            <block type="jg_jimp_opacity"/>
            <block type="jg_jimp_width"/>
            <block type="jg_jimp_height"/>
            <block type="jg_jimp_resize"/>
            <block type="jg_jimp_resizeMethods"/>
            <block type="jg_jimp_scale"/>
            <block type="jg_jimp_crop"/>
            <block type="jg_jimp_flip"/>
            <block type="jg_jimp_rotate"/>
            <block type="jg_jimp_blit"/>
            <block type="jg_jimp_composite"/>
            <block type="jg_jimp_mask"/>
            <block type="jg_jimp_pixelate">
<value name="X">
      <block type="math_number">
        <field name="NUM">0</field>
      </block>
    </value>
<value name="Y">
      <block type="math_number">
        <field name="NUM">0</field>
      </block>
    </value>
<value name="Width">
      <block type="jg_jimp_width"/>
    </value>
<value name="Height">
      <block type="jg_jimp_height"/>
    </value>
            </block>
            <block type="jg_jimp_qblur"/>
            <block type="jg_jimp_sblur"/>
            <block type="jg_jimp_poster"/>
            <block type="jg_jimp_jpgqual"/>
            <block type="jg_jimp_convolute"/>
            <block type="jg_jimp_kernels"/>
            <block type="jg_jimp_setpixel"/>
            <block type="jg_jimp_getpixel"/>
            </category>
            <category name="File Editing" colour="45">
            <block type="jg_file_create"/>
            <block type="jg_file_contents"/>
            <block type="jg_file_extension"/>
            <block type="jg_file_metadata"/>
            <block type="jg_file_foreachfile"/>
            <block type="jg_file_foreachfileinput"/>
            </category>


            <category name="Data Blocks" colour="230">
            <block type="jg_imghttps"/>
            <block type="jg_web_currentdata"/>
            <block type="jg_web_valueofkey"/>
						<block type="jg_web_keywithvalue"/>
            <block type="jg_web_valueofflkey"/>
            <block type="jg_web_haskey"/>
            <block type="jg_web_allkey"/>
						<block type="jg_web_allval"/>
            <block type="jg_web_keycount"/>
            <block type="jg_web_keynumber"/>
<label text="Loops" web-class="boldtext"></label>
            <block type="jg_web_foreachkey"/>
            <block type="jg_web_foreachkeyinput"/>
            </category>


<!--

            <category name="Graphs" colour="90">
            <block type="jg_saveGraph_file"/>
            <block type="jg_saveGraph_convert"/>
            </category>

-->

	    <category name="Encoding and Securing" colour="195">
        <label text="Output blocks" web-class="boldtext"></label>
  <label text="Encoding text" web-class="boldtext"></label>
            <block type="jg_encode_main">
          <value name="type">
           <shadow type="jg_bDI_encodedecodetype">
           </shadow>
           </value>
<value name="type2">
           <shadow type="jg_bDI_encodedecodetype">
           </shadow>
           </value>
<value name="encode">
           <shadow type="text">
           </shadow>
           </value>
           </block>

           <label text="Securing text" web-class="boldtext"></label>


           <block type="jg_encode_hash">
           <value name="encode">
                      <shadow type="text">
                      </shadow>
                      </value>
           
           <value name="rounds">
                      <shadow type="math_number">
                                   <field name="NUM">10</field>
                      </shadow>
                      </value>
           </block>


           <block type="jg_encode_checkhash">
           <value name="hash">
                      <shadow type="text">
                      </shadow>
                      </value>
           
           <value name="test">
                      <shadow type="text">
                      </shadow>
                      </value>
           </block>

           
           <!-- <label text="Functions" web-class="boldtext"></label> -->

</category>
<category name="Public Experiments" colour="120">
    <block type="jg_experiments_xml2json">
        <value name="CONTENT">
            <shadow type="text">
            </shadow>
        </value>
        <value name="CONTENT2">
            <shadow type="text">
            </shadow>
        </value>
    </block>
</category>

        </category>
        
				<category name="{{ JOSE }}" colour="#00664d">
<category name = "embeds pagination" colour="#ed5a5a">
                    <block type="pagination_embed"/>
                    <block type="start_pagination"/>
                </category>
                <category name = "captcha" colour="#ed8b5a">
                    <block type="create_captcha"/>
                    <block type="captcha_image"/>
                    <block type="captcha_value"/>
                    <block type="send_captcha"/>
                </category>
                <category name = "progess bar" colour = "#edbc5a">
                    <block type="filled_bar"/>
                    <block type="split_bar"/>
                </category>
                <category name="firebase" colour="#eded5a">
                    <block type="start_db"/>
                </category> 
                <category name="voice channel" colour="#bced5a">
                    <block type="mute_member"/>
                    <block type="unmute_member"/>
                    <block type="deaf_member"/>
                    <block type="undeaf_member"/>
                    <block type="move_member"/>
                </category>
                <category name="date" colour="#8bed5a">
                    <block type="s4d_current"></block>
                    <block type="unix_to_date"/>
                    <block type="date_to_unix"/>
                    <block type="get_in_date"/>
		    
                </category>
                <category name="RegEx" colour="#5aed5a">
                    <block type="new_regex"/>
                    <block type="test_regex"/>
                </category>
                <category name="attachment" colour="#5aed8b">
                    <block type="att_size"/>
                    <block type="att_name"/>
                    <block type="att_type"/>
                    <block type="att_url"/>
                </category>
                <category name="discord together" colour="#5aedbc">
                    <block type="create_together"/>
                    <block type="invite_code"/>
		    <block type="vc_channel"/>
                </category>
                <category name="cooldown" colour="#5aeded">
                    <block type="set_member_cooldown"/>
                    <block type="delete_member_cooldown"/>
                    <block type="is_member_on_cooldown"/>
                </category>
                <category name="invite tracker" colour="#5abced">
                    <category name="joined" colour="#2873eb">
                        <block type="userinvited"/>
                        <block type="Member"/>
                        <block type="InviteMember"/>
                        <block type="Server"/>
                        <block type="Amount"/>
                    </category>
                    <category name="leave" colour="#0d5ede">
                        <block type="UserLeave"/>
                        <block type="Member"/>
                        <block type="InviteMember"/>
                        <block type="Server"/>
                        <block type="Amount"/>
                    </category>
                    <category name="others" colour="#05409e">
                        <block type="get_member_invites"/>
                    </category>
                </category>
                <category name="image generation" colour="#5a8bed">
                    <block type="1imagepng">
                    <mutation divisor_input="true"></mutation>
                    </block>
                    <block type="1imagegif"/>
                    <block type="2imagepng"/>
                    <block type="load_gif"/>
                    <block type="load_image"/>
                    <block type="send_on_channel"/>
                </category>
                <category name="Events" colour="#5a5aed">
                    <category name="channel" colour="#1d6ff2">
                        <category name="channel permissions update" colour="#055eed">
                            <block type="on_channelPermissionsChange"/>
                            <block type="s4d_channel_raw"/>
                            <block type="permissions"/>
                        </category>
                        <category name="channel topic update" colour="#024abd">
                            <block type="on_channelTopicChange"/>
                            <block type="s4d_channel_raw"/>
                            <block type="topic"/>
                        </category>
                    </category>
                    <category name="member" colour="#01388f">
                        <category name="member boost" colour="#01245c">
                            <block type="on_boost"/>
                            <block type="member_raw"/>
                            <block type="member"/>
                        </category>
                        <category name="member unboost" colour="#01165c">
                            <block type="on_unboost"/>
                            <block type="member_raw"/>
                            <block type="member"/>
                        </category>
                        <category name="member role add" colour="#010c33">
                            <block type="on_roleadd"/>
                            <block type="event-role"/>
                            <block type="member_raw"/>
                            <block type="member"/>
                        </category>
                        <category name="member role remove" colour="#01071c">
                            <block type="on_roleremove"/>
                            <block type="event-role"/>
                            <block type="member_raw"/>
                            <block type="member"/>
                        </category>
                    </category>
                    <category name="guild" colour="#0d2e4d">
                        <category name="guild boost level up" colour="#174169">
                            <block type="on_up"/>
                            <block type="event-guild"/>
                            <block type="boost"/>
                        </category>
                        <category name="guild boost level down" colour="#2a67a1">
                            <block type="on_down"/>
                            <block type="event-guild"/>
                            <block type="boost"/>
                        </category>
                        <category name="guild banner add" colour="#3a82c7">
                            <block type="on_banner_add"/>
                            <block type="event-guild"/>
                            <block type="banner-url"/>
                        </category>
                        <category name="guild vanity url add" colour="#52a4f2">
                            <block type="on_vanity_add"/>
                            <block type="event-guild"/>
                            <block type="vanity-url"/>
                        </category>
                        <category name="guild vanity url remove" colour="#52cdf2">
                            <block type="on_vanity_remove"/>
                            <block type="event-guild"/>
                            <block type="vanity-url"/>
                        </category>
                        <category name="guild vanity url update" colour="#52f2e5">
                            <block type="on_vanity_update"/>
                            <block type="event-guild"/>
                            <block type="url-update"/>
                        </category>
                    </category>
                </category>
                <category name="YoutubeNotifier" colour="#8b5aed">
                    <block type="video_raw"/>
                    <block type="on_newvideo"/>
                    <block type="add_channel"/>
                </category>
                <category name="{{ DISCORDBACKUP }}" colour="#bc5aed">
                    <block type="s4d_create_backup_of_guild_then"/>
                    <block type="s4d_backup_load"/>
                    <block type="s4d_delete_backup"/>
                    <block type="s4d_backup_id"/>
                </category>
                <category name="{{ DISCORDGIVEAWAYS }}" colour="#ed5aed">
                    <block type="s4d_create_giveaway"/> 
                    <block type="s4d_giveaway_id"/>
                    <block type="s4d_dd_giveaway"/>
                    <block type="s4d_giveaway_data"/><!--
                    <block type="s4d_delete_giveaway"/>
                    <block type="s4d_end_giveaway"/>
                    <block type="s4d_pause_giveaway"/>
                    <block type="s4d_unpause_giveaway"/>-->
                </category>
				<category name="{{ DISCORDCANVAS }}" colour="#ed5abc">
					<category name="{{ WELCOME }}" colour="#e83aa5">
						<block type="s4d_create_welcome_then"/>
						<block type="s4d_set_username"/>
						<block type="s4d_set_member_count"/>
						<block type="s4d_set_discriminator"/>
						<block type="s4d_set_background"/>
						<block type="s4d_set_avatar"/>
						<block type="s4d_set_guild_name"/>
						<block type="s4d_set_color"/>
						<block type="s4d_send_in_channel"/>
					</category>
					<category name="{{ GOODBYE }}" colour="#c42186">
						<block type="s4d_create_goodbye_then"/>
						<block type="s4d_set_username"/>
						<block type="s4d_set_member_count"/>
						<block type="s4d_set_discriminator"/>
						<block type="s4d_set_background"/>
						<block type="s4d_set_avatar"/>
						<block type="s4d_set_guild_name"/>
						<block type="s4d_set_color"/>
						<block type="s4d_send_in_channel"/>
					</category>
					<category name="{{ RANKCARD }}" colour="#820954">
						<block type="s4d_create_rankcard_then"/>
						<block type="s4d_set_badge"/>
						<block type="s4d_set_xp"/>
						<block type="s4d_set_username"/>
						<block type="s4d_set_background"/>
						<block type="s4d_set_avatar"/>
						<block type="s4d_set_rank_name"/>
						<block type="s4d_set_rank"/>
						<block type="s4d_set_level"/>
						<block type="s4d_set_reputation"/>
						<block type="s4d_set_color_r"/>
						<label text="%{BKY_TEXT1}"/>
						<label text="%{BKY_TEXT2}"/>
						<label text="%{BKY_TEXT3}"/>
						<label text="%{BKY_TEXT4}"/>
						<block type="s4d_set_text"/>
						<block type="s4d_set_transparency"/>
						<block type="s4d_set_radius"/>
						<block type="s4d_set_addon"/>
						<block type="s4d_send_in_channel"/>
					</category>
				</category>
				<!--<category name="{{ TOOLBOX_JSONREQUEST }}" colour="#ed5a8b">
					<block type="s4d_http_get_then"/>
					<block type="s4d_get_string_of_data"/>
				</category>-->
				        <category name="{{ EMBED }}" colour="#ed5a5a">
        <label text="Create A Perfect Embed" web-class="boldtext"></label>
            <block type="s4d_create_embed_then"></block>
            <label text="%{BKY_COLOR_MESSAGE}"></label>
            <block type="s4d_create_embed_then_set_color"></block>
            <block type="s4d_create_embed_then_set_author"></block>
            <block type="s4d_create_embed_then_set_title"></block>
            <block type="s4d_create_embed_then_add_link"></block>            
            <block type="s4d_create_embed_then_set_thumbnail"></block>
            <label text="%{BKY_HYPERLINK_MESSAGE}"></label>
            <label text="%{BKY_HYPERLINK_MESSAGE_2}"></label>
            <block type="s4d_create_embed_then_set_description"></block>
            <block type="s4d_create_embed_then_add_field"></block>
            <block type="s4d_create_embed_then_set_image"></block>
            <block type="s4d_create_embed_then_set_footer"></block> 
            <label text="%{BKY_SEND_EMBED}"></label>
            <block type="s4d_create_embed_then_send"></block>
    </category>
					        <category name="{{ TOOLBOX_E_DELETED }}" colour="#a14c22">
           <label text="%{BKY_DELETED_RELATED_BLOCKS}" web-class="boldtext"></label>
           <label text="%{BKY_DELETED_EVENT}"></label>
           <block type="s4d_on_deleted"></block>
           <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>
           <block type="s4d_message_content_deleted"></block>
           <block type="s4d_message_server_deleted"></block>
           <block type="s4d_message_channel_deleted"></block>
           <block type="s4d_message_author_deleted"></block>
        </category>
        <category name="{{ TOOLBLOX_E_ADDED }}" colour="#a17722">
        <label text="%{BKY_ADDED_RELATED_BLOCKS}" web-class="boldtext"></label>
        <label text="%{BKY_DETECT_ADDED}"></label>
        <block type="s4d_on_added"></block>
        <label text="%{BKY_ADDED_INFORMATIONS}"></label>
        <block type="s4d_add_server_id"></block> 
        <block type="s4d_add_server_name"></block>
        <block type="s4d_add_server_icon"></block>
        <block type="s4d_add_server_owner"/>
        </category>
        <category name="Removed" colour="#a1a122">
        <label text="blocks related to removed" web-class="boldtext"></label>
        <label text="detect remove"></label>
        <block type="s4d_on_remove"></block>
        <label text="%{BKY_ADDED_INFORMATIONS}"></label>
        <block type="s4d_add_server_id"></block> 
        <block type="s4d_add_server_name"></block>
        <block type="s4d_add_server_icon"></block>
        <block type="s4d_add_server_owner"/>
        </category>
        <category name="{{ TOOLBOX_BUTTON }}" colour="#a1a122">
            <label text="%{BKY_BUTTON_EVENT}"></label>
            <block type="s4d_on_click"></block>
            <label text="%{BKY_BUTTON_EVENT_BLOCKS}"></label>
            <block type="s4d_button_click_id"></block>
            <block type="s4d_button_think"></block>
            <block type="s4d_button_reply"></block>
            <block type="s4d_button_edit"></block>
            <block type="s4d_button_delete_reply"></block>
            <block type="s4d_update"></block>
            <label text="%{BKY_BUTTON_BLOCKS}"></label>
            <block type="s4d_send_button"></block>
            <block type="s4d_button_style"></block>
            <block type="s4d_button_row"></block>
            <block type="s4d_message_row_block"></block>
        </category>
      
        <category name="{{ TOOLBOX_MENU }}" colour="#77a122">
            <label text="%{BKY_BUTTON_EVENT}"></label>
            <block type="s4d_on_menu_click"></block>
            <label text="%{BKY_BUTTON_EVENT_BLOCKS}"></label>
            <block type="s4d_menu_value"></block>
            <block type="s4d_menu_click_id"></block>
            <block type="s4d_menu_reply"></block>
            <block type="s4d_button_think"></block>
            <block type="s4d_button_edit"></block>
            <block type="s4d_button_delete_reply"></block>
	    <block type="s4d_send_button"></block>
            <block type="s4d_update"></block>
            <label text="%{BKY_BUTTON_BLOCKS}"></label>
            <block type="s4d_button_menu"></block>
            <block type="s4d_message_menu_block"></block>
        </category>
        <category name="{{ TOOLBOX_WEBHOOK }}" colour="#4ca122">
            <block type="s4d_create_webhook_then"></block>
            <block type="s4d_edit_webhook"></block>
            <block type="s4d_webhook_id"></block>
            <block type="s4d_webhook_token"></block>
            <block type="s4d_get_webhook_then"></block>
            <block type="s4d_get_edit_webhook"></block>
            <block type="s4d_send_webhook"></block>
        </category>
        <category name="{{ TOOLBOX_MUSIC }}" colour="#22a122">
            <label text="%{BKY_MUSIC_EVENT}"></label>
            <block type="s4d_track_playing"></block>
            <block type="s4d_track_added"></block>
            <block type="s4d_queue_finished"></block>
            <label text="%{BKY_MUSIC_INFO}"></label>
            <block type="s4d_track_name"></block>
            <block type="s4d_track_channel"></block>
            <block type="s4d_track_url"></block>
            <block type="s4d_track_author"></block>
            <block type="s4d_track_thumbnail"></block>
            <block type="s4d_track_views"></block>
            <block type="s4d_track_duration"></block>
            <label text="%{BKY_MUSIC_BLOCKS}"></label>
            <block type="s4d_bot_voice_channel"></block>
            <block type="s4d_voice_channel"></block>
            <block type="s4d_voice_channel_id"></block>
            <block type="s4d_get_queue"></block>
            <block type="s4d_playing"></block>
            <block type="s4d_current_track"></block>
            <block type="s4d_connected"></block>
            <block type="s4d_search"></block>
            <block type="s4d_loop"></block>
            <block type="s4d_volume"></block>
            <block type="s4d_back"></block>
            <block type="s4d_resume"></block>
            <block type="s4d_pause"></block>
            <block type="s4d_stop"></block>
            <block type="s4d_skip"></block>
            <block type="s4d_play"></block>
            <block type="s4d_create_queue"></block>
            <block type="s4d_connect"></block>
        </category>
				</category>
				<category name="{{ MRREDO }}" colour="#FF0000">
        <category name="Event" colour="#00b3ff">
        <category name="Event channel" colour="#00b3ff">
        <block type="on_channelCreate"></block>
        <block type="cc_name"></block>
        <block type="cc_channel"></block>
        <block type="on_channelUpdate"></block>
        <block type="cu_name"></block>
        <block type="cu_channel"></block>
        <block type="on_channelDelete"></block>
        <block type="cd_name"></block>
        <block type="cd_channel"></block>
        </category>
        <category name="Event emoji" colour="#00b3ff">
        <block type="on_emojicreate"></block>
        <block type="ec_name"></block>
        <block type="on_emojiupdate"></block>
        <block type="eu_name"></block>
        <block type="on_emojidelete"></block>
        <block type="ed_name"></block>
        </category>
        <category name="Event role" colour="#00b3ff">
        <block type="on_rolecreate"></block>
        <block type="rc_name"></block>
        <block type="on_roleupdate"></block>
        <block type="ru_name"></block>
        <block type="on_roledelete"></block>
        <block type="rd_name"></block>
        </category>
        <category name="Event sticker" colour="#00b3ff">
        <block type="on_stickercreate"></block>
        <block type="sc_name"></block>
        <block type="on_stickerdelete"></block>
        <block type="sd_name"></block>
        <block type="on_stickerupdate"></block>
        <block type="su_name"></block>
        </category>
        </category>

	<category name="register" colour="#65700c">
        <label text="Register context menu" web-class="boldtext"></label>
        <block type="register_c_m"></block>
	<block type="register_c_m_g"></block>
        </category>
        <category name="slash" colour="#ff2f00">
        <label text="%{BKY_T_RS}"></label>
        <block type="on_slash"></block>
        <block type="interaction_name"></block>
        <block type="options">
        <mutation mode="string"></mutation></block>
        <block type="interaction_author"></block>
        <block type="interaction_channel"></block>
        <block type="interaction_guild"></block>
        <block type="interaction_voice_channel"></block>
        <block type="interaction_voice_channel_id"></block>
        <block type="bot_voice_channel_id"></block>
        <block type="slash_reply"></block>
        <block type="slash_edit"></block>
        <block type="send_m_embed_string"></block>
        </category>
				        <category name="context menu" colour="#f0f255">
        <label text="Event" web-class="boldtext"></label>
        <block type="on_menu"></block>
        <label text="Stuff" web-class="boldtext"></label>
        <block type="m_name"></block>
        <block type="m_member"></block>
        <block type="m_channel"></block>
        <block type="m_guild"></block>
        <block type="c_options"></block>
        <label text="Reply and Edit" web-class="boldtext"></label>
        <block type="m_reply"></block>
        <block type="m_edit"></block>
        <label text="send embed" web-class="boldtext"></label>
        <block type="send_m_embed_string"></block>
        </category>
				<category name="button" colour="#ff0019">
        <label text="%{BKY_T_EDI}"></label>
        <block type="on_button"></block>
        <label text="%{BKY_T_BS}"></label>
        <block type="button_id"></block>
        <block type="button_author"></block>
        <block type="button_channel"></block>
        <block type="button_guild"></block>
        <block type="b_style"></block>
        <label text="%{BKY_T_B_SHIP}Reply and edit and send embed"></label>
        <block type="b_send_msg"></block>
        <block type="button_reply"></block>
        <block type="button_edit"></block>
        <block type="send_m_embed_string"></block>
        <label text="%{BKY_T_CB}"></label>
        <block type="b_create">
                    <value name="B_NAME">
                        <shadow type="text">
                            <field name="TEXT">button_name</field>
                        </shadow>
                    </value>
                </block>
        <label text="%{BKY_T_BR}"></label>
        <block type="b_row">
                    <value name="BUTTON_NAME">
                        <shadow type="text">
                            <field name="TEXT">name</field>
                        </shadow>
                    </value>
                </block>
        <block type="b_row_comp">
                <value name="BUTTON">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="embed" colour="#40BF4A">
        <label text="Create A Perfect Embed" web-class="boldtext"></label>
            <block type="s4d_m_create_embed_then"></block>
            <label text="%{BKY_COLOR_MESSAGE}"></label>
            <block type="s4d_m_create_embed_then_set_color"></block>
            <block type="s4d_m_create_embed_then_set_author"></block>
            <block type="s4d_m_create_embed_then_set_title"></block>
            <block type="s4d_m_create_embed_then_set_thumbnail"></block>
            <label text="%{BKY_HYPERLINK_MESSAGE}"></label>
            <label text="%{BKY_HYPERLINK_MESSAGE_2}"></label>
            <block type="s4d_m_create_embed_then_set_description"></block>
            <block type="s4d_m_create_embed_then_add_field"></block>
            <block type="s4d_m_create_embed_then_add_blankfield"></block>
            <block type="s4d_m_create_embed_then_set_image"></block>
            <block type="s4d_m_create_embed_then_set_footer"></block> 
            <block type="s4d_m_create_embed_then_set_time"></block>
            <label text="%{BKY_SEND_EMBED}"></label>
            <block type="send_m_embed_string"/>
            <block type="s4d_m_create_embed_then_send"></block>
    </category>
		        <category name="edited" colour="#e85a66">
        <label text="%{BKY_T_EDI}" web-class="boldtext"></label>
        <block type="when_message_is_edited"></block>
        <block type="s4d_replys"></block>
        <label text="%{BKY_T_NMS}" web-class="boldtext"></label>
        <block type="newmsg_channel"></block>
        <block type="new_message_server"></block>
        <block type="s4d_newmessage_content"></block>
        <block type="newmsg_member"></block>
        <block type="s4d_newmsg_del"></block>
        <block type="newmsg_timestamp"></block>
        </category>
				<category name="Mongo" colour="#0db550">
        <label text="connect to MongoDB"></label>
        <block type="mongo_on"></block>
        <block type="mongo_connect">
        <value name="URL">
        <shadow type="text">
            <field name="TEXT">mongodb url</field>
        </shadow>
    </value>
        </block>
        <label text="nerd blocks"></label>
        <block type="mongo_get_data">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_has_data">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_set_data">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">world</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_push_data">
        <value name="KEY">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="text">
                <field name="TEXT">world</field>
            </shadow>
        </value>
    </block>
    <block type="mongo_pull_data">
    <value name="KEY">
        <shadow type="text">
            <field name="TEXT">hello</field>
        </shadow>
    </value>
    <value name="VALUE">
        <shadow type="text">
            <field name="TEXT">world</field>
        </shadow>
    </value>
</block>
        <block type="mongo_delete_data">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_add_data">
            <value name="COUNT">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">points</field>
                </shadow>
            </value>
        </block>
        <block type="mongo_subtract_data">
            <value name="COUNT">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">points</field>
                </shadow>
            </value>
        </block>
</category>
</category>
		</category>
        <sep class="bt"/>
        <category name="{{ TOOLBOX_BASE }}" colour="#F46580">
        <label text="%{BKY_MANDATORY_BLOCKS}" web-class="boldtext"></label>
            <block type="s4d_login">
                <value name="TOKEN">
                    <shadow type="text">
                        <field name="TEXT">Your bot token</field>
                    </shadow>
                </value>
            </block>
	    <label text="Repl"></label>
	    <block type="frost_webserver">
<value name="URL">
                    <shadow type="text">
                        <field name="TEXT">This site was created to keep bot on 25/8</field>
                    </shadow>
                </value>
</block>
	    <block type="frost_env">
<value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">env-name</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_BASE_BLOCKS}"></label>
            <block type="s4d_on_connected"></block>
            <label text="%{BKY_BOT_INFORMATIONS}"></label>
            <block type="s4d_bot_ping"></block>
            <block type="s4d_bot_server_count"></block>
            <block type="s4d_get_bot"></block>
						<block type="s4d_bot_amount"/>
                        <block type="jg_s4duptime"/>
            <label text="%{BKY_BOT_ACTIONS}"></label>
            <block type="s4d_set_bot_game"></block>
            <block type="s4d_set_bot_stream_text"></block>
            <block type="s4d_bot_shutdown"></block>
	    <block type="setbot"/>
<label text="{@user} = user ping . {user_tag} = user tag" web-class="boldtext"></label>
            <block type="start_antispam"/>
            <label text="Some more advanced features" web-class="boldtext"></label>
            <block type="jg_when_ran"/>
            <block type="jg_rbs_isRunButton"/>
        </category>
        <category name="{{ TOOLBOX_E_MESSAGES }}" colour="#41AAC0">
            <label text="%{BKY_MESSAGE_RELATED_BLOCKS}" web-class="boldtext"></label>
						<label text="%{BKY_FIND_MESSAGE}"></label>
						<block type="s4d_get_msg_then"></block>
						<block type="edit_msg_by_id"></block>
            <label text="%{BKY_DETECT_MESSAGES}"></label>
            <block type="s4d_on_message"></block>
            <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>
            <block type="s4d_message_content"></block>
            <block type="s4d_message_id"></block>
            <block type="s4d_message_author"></block>
            <block type="s4d_message_member"/>
            <block type="s4d_mentioned_member"></block>
            <block type="s4d_mentioned_channel"></block>
            <block type="s4d_mentioned_role"></block>
            <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"></label>
            <block type="Message"/>
            <block type="s4d_message_channel"></block>
            <block type="s4d_message_guild"></block>
            <label text="%{BKY_RELATED_TO_MESSAGE_STRINGS}"></label>
            <block type="s4d_message_author_raw"></block>
            <block type="s4d_message_channel_raw"></block>
            <block type="s4d_message_guild_raw"></block>
            <label text="%{BKY_MESSAGE_ACTIONS}"></label>
<block type="anti_spam"></block>
            <block type="s4d_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete"></block>
            <block type="s4d_remove_all_reactions"/>
            <block type="s4d_remove_reactions"/>
            <block type="s4d_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_reaction_wait_added_reaction">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_wait_react_emoji_id"></block>
            <block type="s4d_wait_react_emoji_name"></block>
            <block type="s4d_reply_then"> 
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_edit">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_reply_delete"></block>
            <block type="rreply_message"/>
            <block type="s4d_reply_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_reply_id"></block>
						<block type="s4d_pin"/>
						<block type="s4d_unpin"/>
            <block type="s4d_message_embed"></block>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <category name="Threads" colour="#2a97b8">
            <label text="%{BKY_LABEL_THREAD_MESSAGE}"/>
            <block type="s4d_on_thread_message"/>
            <block type="s4d_send_thread"/>
            <label text="Thread message info"/>
            <block type="s4d_thread_message_content"/>
            <block type="s4d_thread_message_id"/>
            <block type="s4d_thread_message_author"/>
            <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"/>
            <block type="s4d_message_thread"/>
            <block type="s4d_server_thread"/>
            <label text="%{BKY_RELATED_TO_MESSAGE_STRINGS}"/>
            <block type="s4d_thread_message_author_raw"/>
            <block type="s4d_thread_raw"/>
            <block type="s4d_thread_guild_raw"/>
            <label text="%{BKY_MESSAGE_ACTIONS}"/>
            <block type="s4d_start_thread"/>
            <block type="s4d_started_thread"/>
            <block type="s4d_thread_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
                <value name="MENTION">
                    <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </block>
                </value>
            </block>
            <block type="s4d_thread_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_thread_message_delete"/>
            <label text="%{BKY_LABEL_THREAD_ARCHIVE}"/>
            <block type="s4d_on_thread_archive"/>
            <block type="s4d_on_thread_unarchive"/>
            <block type="s4d_unarchived_thread"/>
            <label text="%{BKY_THREAD_CREATE_LABEL}"/>
            <block type="s4d_on_thread_create"/>
            <block type="s4d_created_thread_on"/>
            <label text="%{BKY_THREAD_DELETE_LABEL}"/>
            <block type="s4d_on_thread_delete"/>
            <block type="s4d_deleted_thread"/>
            <label text="%{BKY_THREAD_OTHER_LABEL}"/>
            <block type="s4d_thread_channel"/>
            <block type="s4d_thread_name"/>
            <block type="s4d_thread_server"/>
            <block type="s4d_thread_archive"/>
        </category>
        <category name="{{ TOOLBOX_E_JOINS }}" colour="#EABB11">
            <label text="%{BKY_JOINS_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_JOINS}"></label>
            <block type="s4d_on_member_join"></block>
            <label text="%{BKY_JOINING_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_joining_member"></block>
            <block type="s4d_joining_guild"></block>
            <label text="%{BKY_RELATED_TO_JOIN_STRINGS}"></label>
            <block type="s4d_joining_member_raw"></block>
            <block type="s4d_joining_guild_raw"></block>
        </category>
        <category name="{{ TOOLBOX_E_LEAVES }}" colour="#778899">
            <label text="%{BKY_LEAVES_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_LEAVES}"></label>
            <block type="s4d_on_member_leave"></block>
            <label text="%{BKY_LEAVING_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_leaving_guild"></block>
            <label text="%{BKY_RELATED_TO_LEAVE_STRINGS}"></label>
            <block type="s4d_leaving_member_raw"></block>
            <block type="s4d_leaving_guild_raw"></block>
        </category>
        <category name="{{ TOOLBOX_E_REACTIONS }}" colour="#89674A">
            <label text="%{BKY_REACT_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_REACT}"></label>
            <block type="s4d_on_react_added"></block>
            <block type="s4d_on_react_removed"></block>
            <label text="%{BKY_REACT_INFORMATIONS}"></label>
            <block type="s4d_react_message"/>
            <block type="s4d_react_message_id"></block>
            <block type="s4d_react_emoji"></block>
            <block type="s4d_react_member"></block> 
			<block type="s4d_react_count"></block>
            <block type="s4d_remove_all_reactions"/>
            <block type="s4d_remove_reactions"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <sep class="bt"/>
        <category name="{{ TOOLBOX_SERVER }}" colour="#D85E47">
            <label text="%{BKY_FIND_SERVER}"></label>
            <block type="s4d_get_server"></block>
            <block type="s4d_get_all_server"></block>
            <block type="s4d_get_all_server_server"></block>
            <label text="%{BKY_LABEL_SERVER_INFOS}"></label>
	    <block type="server_attributes"/>
	    <block type="set_server_something">
                   <value name="reason">
                       <shadow type ="text">
                           <field name="TEXT"> </field>
                        </shadow>
                   </value>
               </block>
            <block type="s4d_server_name"></block>
            <block type="s4d_member_count"></block>
            <block type="s4d_icon_url"></block>
            <block type="s4d_server_id"></block>
            <block type="s4d_boost_level"></block>
            <block type="s4d_server_owner"></block>
            <block type="s4d_number_of__server"></block>
            <block type="s4d_server_created_at"></block>
            <block type="s4d_leave_server"></block>
            <label text="%{BKY_LABEL_MODIFY_SERVER}"></label>
            <block type="s4d_set_server_name"></block>
            <label text="ㅤ" web-class="boldtext"></label>
	    
	    <block type="set_server_something">
                    <value name="reason">
                        <shadow type ="text">
                            <field name="TEXT"> </field>
                        </shadow>
                    </value>
                </block>
	    <block type="explicit_content_filter"/>
                <block type="default_notif_lvl"/>
                <block type="set_verification_level"/>
                
        </category>
        <category name="{{ TOOLBOX_CHANNELS }}" colour="#a55b80">
            <label text="%{BKY_FIND_CHANNEL}"></label>
            <block type="s4d_get_channel"></block>
            <block type="s4d_get_all_channel"></block>
            <block type="s4d_get_all_channel_channel"></block>
	    <block type="get_all_channel_channel_name"></block>
            <label text="%{BKY_SEND_CHANNEL_LABEL}"></label>
            <block type="s4d_send_channel"></block>
	    <label text="Channel Info"></label>
	    <block type="s4d_channel_ahq_name"></block>
      <block type="s4d_channel_id"/>
      <block type="s4d_channel_guild_id"/>
      <block type="s4d_channel_parent_id"/>
      <block type="s4d_channel_message_id"/>
      <block type="s4d_channel_topic"/>
            <label text="%{BKY_FORMS}"></label>
            <block type="s4d_send_wait_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ SEND_WAIT_REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_send_wait_reply_value"></block>
            <block type="reply_mentioned_member"/>
            <block type="reply_mentioned_role"/>
            <block type="reply_mentioned_channel"/>
            <block type="reply_message"/>
            <block type="reply_message_id"/>
            <label text="%{BKY_CHANNEL_MESSAGE_ACTIONS}"></label>
            <block type="s4d_channel_exist"/>
             <block type="s4d_purge">

                <value name="AMOUNT">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value> 
            </block>
	    
	    
            <label text="%{BKY_CHANNEL_ACTIONS}"></label>
            <block type="s4d_is_channel_nsfw"/>
            <block type="slowmode"></block>
            
            <block type="set_perms_parent"></block>
            <block type="s4d_create_channel"></block>
            <block type="s4d_delete_channel"></block>
            <label text="ㅤ" web-class="boldtext"></label>
	    

                <label text="Create a new perfect event!"/>
                <label text="⚠ ISO 8601 is needed for the dates! You can find it at : unixtimestamp.com"/>
                <block type="create_new_event"> <value name="event_id"> <block type="text"> </block> </value></block>
		<block type="edit_s_event">

                    <value name="event_id">
                        <block type="text"/>
                    </value>

                </block>
                <block type="event_set_options"/>
                <label text="Event options"/>
                <block type="privacylevel"/>
                <block type="entitytype"/>
                <label text="Delete perfect event..."/>
                <block type="delete_sch_event"> <value name="amongus"> <shadow type="text"> </shadow> </value> </block>

        </category>
        <category name="{{ TOOLBOX_ROLES }}" colour="#2EB66B">
            <label text="%{BKY_FIND_ROLE}"></label>
            <block type="s4d_get_role"></block>
            <block type="s4d_get_all_role"></block>
            <block type="s4d_get_all_role_role"></block>
            <label text="%{BKY_ROLE_ASSIGNMENT}"></label>
<block type="fz_role_info_text"/>
<block type="fz_role_info_num"/>
						<block type="fz_role_info_bool"/>
<block type="fz_role_info_color"/>
            <block type="s4d_add_role"><value name="MEMBER"><shadow type="s4d_message_member"/></value></block>
            <block type="s4d_remove_role"><value name="MEMBER"><shadow type="s4d_message_member"/></value></block>
            <block type="s4d_delete_role"></block>
            <block type="s4d_has_role"></block>
						<block type="s4d_role_exist"/>
            <block type="s4d_create_role"></block>
            <block type="s4d_set_role_perm"></block>
	    <block type="set_role_icon"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category> 
        <category name="{{ TOOLBOX_MEMBERS }}" colour="#187795">
            <label text="%{BKY_FIND_MEMBER}"></label>
            <block type="s4d_get_member"></block>
            <block type="s4d_get_all"></block>
            <block type="s4d_get_all_member"></block>
            <label text="%{BKY_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_member_exist"/>
            <block type="s4d_member_id"></block>
            <block type="s4d_member_discriminator"></block>
            <block type="s4d_member_tag"></block>
            <block type="ahq_presence"/>
            <block type="s4d_member_username"></block>
            <block type="s4d_member_nickname"></block>
            <block type="s4d_member_icon"></block>
            <block type="s4d_member_dynamic_icon"></block>
            <block type="s4d_joined_at"></block>
            <block type="s4d_created_at"></block>
            <block type="s4d_member_has_permission"></block>
	    <block type="member_channel_perms"/>
            <block type="s4d_member_is_bot"></block>
            <label text="%{BKY_LABEL_MEMBER_ACTIONS}"></label>
            <block type="s4d_kick_member"></block>
            <block type="s4d_ban_member"></block>
            <block type="s4d_unban_member"></block>
	    <block type="banned_event"/>
            <block type="banned_objects"/>
            <block type="unbanned_event"/>
            <block type="unbanned_objects"/>
            <block type="s4d_send_member"></block>

            <block type="s4d_set_member_nickname"></block>
            <label text="%{BKY_FORMS}"></label>
            <block type="s4d_send_wait_reply_dm"></block>
            <block type="s4d_send_wait_reply_dm_value"></block>
          <label text="ㅤ" web-class="boldtext"></label>
        </category>
        <sep class="bt"/>
    <category name="Web Requests" colour="#4C97FF">
        <category name="Simple" colour="#4c8bff">
            <block type="s4d_http_get_then"/>
            <block type="s4d_get_string_of_data"/>
        </category>
        <category name="Advanced" colour="#4c79ff">
            <block type="jg_web_request_advanced_send_request">
                <value name="URL">
                    <block type="text">
                        <field name="TEXT">https://jsonplaceholder.typicode.com/posts</field>
                    </block>
                </value>
                <value name="HEADERS">
                    <block type="jg_web_request_advanced_header">
                        <value name="KEY">
                            <block type="text">
                                <field name="TEXT">content-type</field>
                            </block>
                        </value>
                        <value name="VALUE">
                            <block type="text">
                                <field name="TEXT">application/json</field>
                            </block>
                        </value>
                    </block>
                </value>
                <value name="BODY">
                    <block type="jg_web_request_advanced_data">
                        <value name="KEY">
                            <block type="text">
                                <field name="TEXT">key</field>
                            </block>
                        </value>
                        <value name="VALUE">
                            <block type="text">
                                <field name="TEXT">value</field>
                            </block>
                        </value>
                    </block>
                </value>
                <value name="IF_ERROR">
                    <block type="s4d_print">
                        <value name="PRINT">
                            <block type="frost_other_err"/>
                        </value>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_header">
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">content-type</field>
                    </block>
                </value>
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT">application/json</field>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_data">
                <value name="KEY">
                    <block type="text">
                        <field name="TEXT">key</field>
                    </block>
                </value>
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT">value</field>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_get_response_data">
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT">key</field>
                    </block>
                </value>
            </block>
            <block type="jg_web_request_advanced_response"/>
            <block type="jg_web_request_advanced_response_status"/>
            <block type="jg_web_request_advanced_response_headers"/>
            <block type="jg_web_request_advanced_response_data"/>
        </category>
    </category>
    <category name="Applications" colour="#4c79ff">
        <category name="Minecraft" colour="110">
            <category name="Java" colour="120">
                <label text="Start by grabbing the server to get data from." web-class="boldtext"></label>
                <block type="jg_minecraft_getjava">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">25565</field>
                        </block>
                    </value>
                </block>
                <label text="The blocks below will get data from the server." web-class="boldtext"></label>
                <block type="jg_minecraft_java_motd"/>
                <block type="jg_minecraft_java_players"/>
                <block type="jg_minecraft_java_version"/>
                <block type="jg_minecraft_java_data"/>
                <label text="The blocks below will only work if the server has enabled query." web-class="boldtext"></label>
                <block type="jg_minecraft_queryjava">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">25565</field>
                        </block>
                    </value>
                </block>
                <block type="jg_minecraft_query_player_list"/>
                <block type="jg_minecraft_query_version"/>
                <block type="jg_minecraft_query_software"/>
                <block type="jg_minecraft_query_plugin_list"/>
                <block type="jg_minecraft_query_map"/>
                <block type="jg_minecraft_query_data"/>
            </category>
            <category name="Java (RCON)" colour="160">
                <label text="Run operator commands on your Minecraft Java server." web-class="boldtext"></label>
                <label text="You'll need to enable and setup RCON on your server for these to work." web-class="boldtext"></label>
                <block type="jg_minecraft_rcon_create_client">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">25575</field>
                        </block>
                    </value>
                </block>
                <block type="jg_minecraft_rcon_send_command">
                    <value name="COMMAND">
                        <block type="text">
                            <field name="TEXT">time set day</field>
                        </block>
                    </value>
                </block>
                <block type="jg_minecraft_rcon_disconnect"/>
                <block type="jg_minecraft_rcon_when_command_response"/>
                <block type="jg_minecraft_rcon_command_response"/>
            </category>
            <category name="Bedrock" colour="190">
                <label text="Start by grabbing the server to get data from." web-class="boldtext"></label>
                <block type="jg_minecraft_bedrock_get">
                    <value name="IP">
                        <block type="text">
                            <field name="TEXT">server ip</field>
                        </block>
                    </value>
                    <value name="PORT">
                        <block type="math_number">
                            <field name="NUM">19132</field>
                        </block>
                    </value>
                </block>
                <label text="The blocks below will get data from the server." web-class="boldtext"></label>
                <block type="jg_minecraft_bedrock_motd"/>
                <block type="jg_minecraft_bedrock_players"/>
                <block type="jg_minecraft_bedrock_server_info"/>
                <block type="jg_minecraft_bedrock_version"/>
                <block type="jg_minecraft_bedrock_edition"/>
                <block type="jg_minecraft_bedrock_data"/>
            </category>
        </category>
        <category name="Roblox" colour="0">
            <label text="Version 1.0 of Roblox Blocks" web-class="boldtext"></label>
            <label text="User info" web-class="boldtext"></label>
            <block type="jg_roblox_get_user_id_from_username"/>
            <block type="jg_roblox_user_id"/>
            <block type="jg_roblox_get_user_info"/>
            <block type="jg_roblox_user_info"/>
            <block type="jg_roblox_get_user_thumbnail"/>
            <block type="jg_roblox_user_thumbnail_info"/>
            <label text="Groups" web-class="boldtext"></label>
            <block type="jg_roblox_get_user_group"/>
            <block type="jg_roblox_group_info"/>
            <block type="jg_roblox_get_group_icon"/>
            <block type="jg_roblox_group_icon"/>
            <block type="jg_roblox_get_user_group_rank"/>
            <block type="jg_roblox_user_group_rank"/>
        </category>
    </category>
        <sep class="bt"/>
        <category name="{{ TOOLBOX_DATABASE }}" colour="#FF0000">
            <label text="%{BKY_LABEL_READ_DB}"></label>
            <block type="s4d_get_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_has_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_get_all_data"/>
            <label text="%{BKY_LABEL_UPDATE_DB}"></label>
            <block type="s4d_set_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete_data">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_add_data">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_subtract_data">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete_all_data"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>
	        <category name="Dootabase" colour="#FF0000">
            <label text="%{BKY_LABEL_READ_DB}"></label>
<block type="s4d_set_db2">
<value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">database</field>
                    </shadow>
                </value>
                </block>
            <block type="s4d_get_data2">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_has_data2">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_get_all_data2"/>
            <label text="%{BKY_LABEL_UPDATE_DB}"></label>
            <block type="s4d_set_data2">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete_data2">
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">hello</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_add_data2">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_subtract_data2">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
<block type="s4d_multi_data2">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
<block type="s4d_divide_data2">
                <value name="COUNT">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="KEY">
                    <shadow type="text">
                        <field name="TEXT">points</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete_all_data2"/>
            <label text="ㅤ" web-class="boldtext"></label>
        </category>

        

                    

        
    </xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
        return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))

    // OLD searching code
    /*
    
    // preparing variables for searching
    
        const default_max_length = 250
        var CATEGORYCONTENT;
    
    // set default blocks from BlocklyComponent function code
    
    const toolboxArray = toolbox_xml_contents.split('\n');
                var blocks = []
                var pushed
                var repeat_end = toolboxArray.length;
                for (var count = 0; count < repeat_end; count++) {
                    if ((toolboxArray[count].includes('<block type="')) && !(toolboxArray[count].includes('LINE HIDDEN FROM SEARCH'))) {
                        pushed = (((toolboxArray[count].replaceAll(" ", "")).replaceAll('blocktype="', "")).replaceAll("/", "").replaceAll("<", "").replaceAll('"', "")).replaceAll("'", "").replaceAll("\t", "")
                        pushed = pushed.slice(0, pushed.indexOf('>'));
                        if (!(blocks.includes(pushed))) {
                            blocks.push(pushed)
                        }
                    }
                }
    
    // set the default blocks and run the searching code
    
    const defaultblocks = blocks
    
        if (searching) {
            var newblocks = []
            var check;
            var searchparam = prompt("Search for a block with:")
            if (!(searchparam)) {
                searchparam = "null"
            }
            var searchparamFiltered = ((searchparam.replaceAll("<", "_")).replaceAll(">", "_")).replaceAll("\\", "_")
            searchparam = searchparam.replaceAll(" ", "_").toLowerCase()
            var repeat_end = defaultblocks.length;
            for (var count = 0; count < repeat_end; count++) {
                check = defaultblocks[count];
                if (String(check).includes(String(searchparam)) && !(String(check).includes("LINE HIDDEN FROM SEARCH"))) {
                    newblocks.push(check);
                }
            }
            if (newblocks.length > 1) {
                var s = "s"
            } else {
                var s = ""
            }
            if (newblocks.length > 0) {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}, found ${newblocks.length} block${s} that matched" web-class="boldtext"></label><block type="${newblocks.join("\"/>\n<block type=\"")}"/>`
            } else {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
            }
        } else {
            var length_lessthan_350 = true
            if (defaultblocks.length < default_max_length) {
                var newblocks = defaultblocks
            } else {
                length_lessthan_350 = false
                var newblocks = defaultblocks.slice(0, default_max_length)
            }
            if (newblocks.length > 0) {
                var CATEGORYCONTENT = "<block type=\"" + newblocks.join("\"/>\n<block type=\"") + "\"/>"
                if (length_lessthan_350 == false) {
                    CATEGORYCONTENT = CATEGORYCONTENT + `<label text="${defaultblocks.length - default_max_length} blocks left..." web-class="boldtext"></label>`
                }
            } else {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
            }
        }
        toolbox_xml_contents = toolbox_xml_contents.replace("<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->", CATEGORYCONTENT)
    
    */


    return toolbox_xml_contents


}
