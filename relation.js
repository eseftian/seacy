$(function() {
    //Initialize Select2 Elements
    $(".select2").select2();

    $.get("<?php echo backend_url().this_module();?>/get_column?table=" + $("#primary_table").val(), function(data) {
        $("#primary_id").html(data);
        $(".select2").select2();
    });

    $.get("<?php echo backend_url().this_module();?>/get_column?table=" + $("#relation_table").val(), function(data) {
        $("#relation_id").html(data);
        $(".select2").select2();
    });

    $("#primary_table").change(function() {
        $.get("<?php echo backend_url().this_module();?>/get_column?table=" + $("#primary_table").val(), function(data) {
            $("#primary_id").html(data);
            $(".select2").select2();
        });
    });

    $("#relation_table").change(function() {
        $.get("<?php echo backend_url().this_module();?>/get_column?table=" + $("#relation_table").val(), function(data) {
            $("#relation_id").html(data);
            $(".select2").select2();
        });
    });

    $(".box-body").on("click", ".relation_table", function(e) {
        e.preventDefault();
        var a = $(this).closest("a");
        var checkbox = [a.attr("id")];

        var remote = "<?php echo backend_url().this_module();?>/delete_action";

        $.post(remote, { checkbox })
            .done(function(data) {
                $('#myModal').modal('show');
                $('.modal-content').html(data);
            });
    });
});