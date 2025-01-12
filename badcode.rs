let action: i32 = get_action();
match action {
  0 => panic!("no actions available"),
  1 => move_pawn(),
  2 => move_rook(),
  _ => panic!("unknown action"),
}