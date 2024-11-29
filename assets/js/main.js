

(function ($) {
    "use strict";



    /*-----------------------------------
      Sidebar Toggle
    -----------------------------------*/
    var scrollTop;
    $(".half-expand-toggle").on("click", function () {
        scrollTop = $(".sidebar-menu").offset().top;
        $("#layout-wrapper").toggleClass("half-expand");
    });
    $(".close-toggle").on("click", function () {
        $("#layout-wrapper").toggleClass("sidebar-expand");
    });



    /*----------------------------------------------
      Select 2 Single
    ----------------------------------------------*/
    $(".select2").select2({
        placeholder: "Choose one",
        width: "100%",
    });

    /*----------------------------------------------
      Select 2 Single [Modal] // Modal select2 issue
    ----------------------------------------------*/
    $(".select2-modal").select2({
        placeholder: "Choose one",
        width: "100%",
        dropdownParent: $(".modal")  // Modal select2 issue
    });

    /*----------------------------------------------
      Select 2 Multiple
    ----------------------------------------------*/
    $(".multiple-select").select2({
        multiple: true,
        width: "100%",
        placeholder: "Choose one",
        tags: "true",
        placeholder: "Select an option",
    });

    /*-----------------------------------
      Date Ranger
    -----------------------------------*/
    $('.date-range-picker').length > 0 &&

    $(function () {

        var start = moment().subtract(29, 'days');
        var end = moment();
        function cb(start, end) {
            $('.date-range-picker span, .daterange2 span').html(
                start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')
            );
        }
        $('.date-range-picker, .daterange2').daterangepicker(

            {
                startDate: start,
                endDate: end,
                ranges: {

                    singleDatePicker: true,
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [
                        moment().subtract(1, 'month').startOf('month'),
                        moment().subtract(1, 'month').endOf('month'),
                    ],
                },
            },
            cb
        );
        cb(start, end);
    });

    /*-----------------------------------
        File Upload btn style
    -----------------------------------*/
    $(document).ready(function() {
        $(".img-upload-input").on("change", function() {
            var uploaderSection = $(this).closest(".img-uploader");
            var uploadedImagesContainer = uploaderSection.find(".uploaded-images-container");
            var files = $(this)[0].files;
            uploadedImagesContainer.empty(); 
            $.each(files, function(index, file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var imageItem = $('<div class="image-item">');
                    var img = $('<img>').attr('src', e.target.result);
                    var closeIcon = $('<span class="btn-close"><i class="ri-close-circle-fill"></i></span>');
            
                    imageItem.append(img).append(closeIcon);
                    uploadedImagesContainer.append(imageItem);
                };
                reader.readAsDataURL(file);
            });
        });
        $(document).on("click", ".btn-close", function() {
            var uploaderSection = $(this).closest(".img-uploader");
            var uploadedImagesContainer = uploaderSection.find(".uploaded-images-container");
            $(this).closest('.image-item').remove();
        });
        $(".img-uploader").on("click", function(event) {
            if (!$(event.target).is("input[type='file']")) {
                $(this).find(".img-upload-input").click();
            }
        });
    });

    /*-----------------------------------
      Single DatePicker
    -----------------------------------*/
    $('.single-date-picker').each(function () {
        $(this).daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
        });
        $(this).val('');
        $(this).attr("autocomplete", "off");
    });



    /*-----------------------------------
      Tagify
    -----------------------------------*/
    var $input = $('input[name=tag]').tagify({
        whitelist: [
            { "id": 1, "value": "some string" }
        ]
    })

    var input = document.querySelector('input[name="input-custom-dropdown"]'),
        tagify = new Tagify(input, {
            whitelist: ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "Avicsoft", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "Apex (Salesforce.com)", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "Active Server Pages", "ASP.NET", "B", "Babbage", "Bash", "BASIC", "bc", "BCPL", "BeanShell", "Batch (Windows/Dos)", "Bertrand", "BETA", "Bigwig", "Bistro", "BitC", "BLISS", "Blockly", "BlooP", "Blue", "Boo", "Boomerang", "Bourne shell (including bash and ksh)", "BREW", "BPEL", "B", "C--", "C++ – ISO/IEC 14882", "C# – ISO/IEC 23270", "C/AL", "Caché ObjectScript", "C Shell", "Caml", "Cayenne", "CDuce", "Cecil", "Cesil", "Céu", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk", "Citrine (programming language)", "CL (IBM)", "Claire", "Clarion", "Clean", "Clipper", "CLIPS", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL – ISO/IEC 1989", "CobolScript – COBOL Scripting language", "Cobra", "CODE", "CoffeeScript", "ColdFusion", "COMAL", "Combined Programming Language (CPL)", "COMIT", "Common Intermediate Language (CIL)", "Common Lisp (also known as CL)", "COMPASS", "Component Pascal", "Constraint Handling Rules (CHR)", "COMTRAN", "Converge", "Cool", "Coq", "Coral 66", "Corn", "CorVision", "COWSEL", "CPL", "CPL", "Cryptol", "csh", "Csound", "CSP", "CUDA", "Curl", "Curry", "Cybil", "Cyclone", "Cython", "Java", "Javascript", "M2001", "M4", "M#", "Machine code", "MAD (Michigan Algorithm Decoder)", "MAD/I", "Magik", "Magma", "make", "Maple", "MAPPER now part of BIS", "MARK-IV now VISION:BUILDER", "Mary", "MASM Microsoft Assembly x86", "MATH-MATIC", "Mathematica", "MATLAB", "Maxima (see also Macsyma)", "Max (Max Msp – Graphical Programming Environment)", "Maya (MEL)", "MDL", "Mercury", "Mesa", "Metafont", "Microcode", "MicroScript", "MIIS", "Milk (programming language)", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "Mathcad", "MSIL – deprecated name for CIL", "MSL", "MUMPS", "Mystic Programming L"],
            maxTags: 10,
            dropdown: {
                maxItems: 20,           
                classname: 'tags-look', 
                enabled: 0,            
                closeOnSelect: false   
            }
        })

    /*-----------------------------------
      Password Show Hide
    -----------------------------------*/
    $(document).ready(function () {
        $(".toggle-password").click(function () {
            var passwordInput = $($(this).siblings(".password-input"));
            var icon = $(this);
            if (passwordInput.attr("type") == "password") {
                passwordInput.attr("type", "text");
                icon.removeClass("ri-eye-line").addClass("ri-eye-off-line");
            } else {
                passwordInput.attr("type", "password");
                icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
            }
        });
    })
    $('#myModal1').on('shown.bs.modal', function (e) {
        $(document).off('focusin.modal');
    })


})(jQuery);



